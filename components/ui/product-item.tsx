import { ProductWithTotalPrice } from '@/helpers/product'
import Image from "next/image";
import { Badge } from './badge';
import { ArrowDown, ArrowDownIcon } from 'lucide-react';

interface ProductItemProps {
  product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="relative bg-accent rounded-lg w-[156px] h-[170px] flex items-center">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: "contain"
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-1 py-1/2">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className='font-semibold'>{product.totalPrice.toLocaleString('pt-BR', {
                currency: 'BRL',
                style: 'currency'
              })}</p>
              <p className='opacity-75 line-through text-xs'>{
                Number(product.basePrice).toLocaleString('pt-BR', {
                  currency: 'BRL',
                  style: 'currency'
                })
              }</p>
            </>
          ) : (
            <p className='font-semibold text-sm'>{product.totalPrice.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            })}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;