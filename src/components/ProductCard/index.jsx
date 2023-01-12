import React from 'react'
import s from './index.module.css'

export default function ProductCard({id, title, description, price, rating, brand, images}) {

  return (
    <div className={s.product_card}>
        <img src={images[0]} alt="" />
        <div>
            <p className={s.product_card_title}>{title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> {price} euro</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Brand:</strong> {brand}</p>
        </div>
     
    </div>
  )
}
