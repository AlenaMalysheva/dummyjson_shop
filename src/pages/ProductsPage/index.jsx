import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../requests/products';
import s from './index.module.css';

export default function ProductsPage() {

const {category} = useParams()

const [ products, setProducts ] = useState([]);

useEffect(() => {getProducts(category,setProducts)} , [])

console.log(products)

  return (
    <div>
      {
        products.length === 0 ?
          <p>category {category} are loading</p>
        : 
          <div className={s.products_container}>
            {
              products.map(el => <ProductCard key={el.id} {...el}/>)
            }
          </div>
      }
    </div>
   
  )
}
