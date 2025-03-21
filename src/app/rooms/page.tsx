import CounterCart from '@/components/CounterCart';
import React from 'react'
export const metadata = {
    title: "Products",
    description: "Ecommerce Website",
  };


interface Product {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:number
}
export default async function rooms() {
    const res=await fetch(`https://fakestoreapi.com/products`)
    const products=await res.json()
    console.log(products);
    
  return (
    <div>
        <h1 className='text-8xl'>Products</h1>

        {
            products.map((product:Product)=>(
                <div key={product.id}>
                    <img src={product.image} alt="" />
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                    <CounterCart/> 
                </div>
            ))
        }
  
    </div>
  )
}
 