import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard';
import { data } from '../../data/db';
import "./home.css"

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data.products)
    }, [])
    return (
      <div className='products__container'>
        {products.length ?
          products.map((item) => (
            <ProductCard key={item.id} product={item} />
          )) : "loading..."}
      </div>
    )
}
