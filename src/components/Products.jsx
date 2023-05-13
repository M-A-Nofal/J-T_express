import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/slices/products-slice';

const Products = () => {

  const products = useSelector((state)=> state.products);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProducts())
  },[]);


  return (
    <div className="py-10">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">NEW ARRIVALS</h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nihil laborum esse neque necessitatibus dolores, tempore unde ducimus nemo quo quam labore eum eligendi repellat.
            </p>
        </div>
        <div className=" mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 px-10">
          {products.map((product) => {
            return (
              <Product key={product._id} product={product} />
            )
          })}
        </div>
    </div>
  )
}

export default Products