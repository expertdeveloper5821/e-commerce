import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import { products } from "./products";
function ProductGrid() {
    return  (
        <>
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {Array.isArray(products) && products.map((product) => (
               <Link to="/productlist">
     <div key={product.id} className="group relative border-solid p-3 border-2 mt-5 mb-5 border-black-600">
     <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg rounded-s relative">
       <img
         src={product.thumbnail}
         alt={product.title}
         className="h-full w-full object-cover object-center absolute transition-all duration-300 transform scale-100 hover:scale-150 filter hover:blur-lg hover:opacity-75"
         style={{
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
         }}
       />
       <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
         <Link to="/Cart" className="flex flex-col space-y-4">
           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
             Add to Cart
           </button>
           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
             Buy Now
           </button>
         </Link>
       </div>
     </div>
                     <div className="mt-4 flex justify-between">
                       <div>
                         <h3 className="text-sm text-gray-700">
                           <a href={product.thumbnail}>
                             <span aria-hidden="true" className="absolute inset-0" />
                             {product.title}
                           </a>
                         </h3>
                         <p className="mt-1 text-left text-sm text-gray-500">
                           <StarIcon className='w-6 h-6 text-left inline text-yellow-500'></StarIcon>
                           
                          <span className='align-bottom'>{product.rating}</span> </p>
                       </div>
                       <div>
                       <p className="text-sm  block font-medium text-gray-900">$ {Math.round(product.price*(1-product.discountPercentage/100))}</p>
   
                       <p className="text-sm  block font-medium line-through text-gray-900">$ {product.price}</p>
                       </div>
                     </div>
                   </div>
                   </Link>
   ))}
               </div>
             </div>
           </div>
           </>
    )
  }
  
  export default ProductGrid;
  