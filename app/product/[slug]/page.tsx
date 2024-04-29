import { prismaClient } from "@/lib/prisma"
import ProductImages from "./components/product-images"

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    }
  })

  if (!product)
    return null

  return (
    <div className="flex flex-col gap-8">
      <ProductImages
        name={product.name}
        imageUrls={product.imageUrls}
      />
      <div className="p-5">
        <h1>{product.name}</h1>
      </div>
    </div>
  )
}

export default ProductDetailsPage