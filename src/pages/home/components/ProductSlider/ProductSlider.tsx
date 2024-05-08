import ProductCard from "./ProductCard"

const ProductSlider = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 w-full">
      <ProductCard isLoading={false}/>
      <ProductCard isLoading={false}/>
      <ProductCard isLoading={false}/>
      <ProductCard isLoading={false}/>
    </div>
  )
}

export default ProductSlider
