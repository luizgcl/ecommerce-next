'use client';

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductWithTotalPrice } from "@/helpers/product"
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react"
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<ProductWithTotalPrice,
    'name'
    | 'basePrice'
    | 'description'
    | 'discountPercentage'
    | 'totalPrice'>
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => prev === 1 ? prev : prev - 1)
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col gap-4 px-5">
      <h2 className="text-2xl">{product.name}</h2>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">
            {product.totalPrice.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            })}
          </h1>
          {
            product.discountPercentage > 0 && (
              <Badge className="px-1 py-1/2">
                <ArrowDownIcon size={14} />
                {product.discountPercentage}%
              </Badge>
            )
          }
        </div>
        {
          product.discountPercentage > 0 && (
            <p className="text-sm opacity-75">
              De:{' '}
              <span className="line-through">
                {Number(product.basePrice).toLocaleString('pt-BR', {
                  currency: 'BRL',
                  style: 'currency'
                })}
              </span>
            </p>
          )
        }
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}>
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-semibold">Descrição</h3>
        <p className="text-sm opacity-60 text-justify">{product.description}</p>
      </div>

      <Button className="mt-8 uppercase font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent flex items-center px-5 py-2 justify-between rounded-lg mt-5">
        <div className="flex items-center gap-3">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-semibold">FSPacket &reg;</span>
            </p>
            <p className="text-[#8162FF] text-sm">
              Envio para <span className="font-semibold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-sm font-bold">Frete Grátis</p>
      </div>
    </div>
  )
}

export default ProductInfo