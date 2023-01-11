import React from 'react'
import { getCategories } from '../../requests/categories'
import { useState, useEffect } from 'react'
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css'
export default function CategoriesPage() {

const [ categories, setCategories ] = useState([]);


useEffect(() => {getCategories(setCategories)} , [])

  return (
    <div className={s.categories_page}>
      {
        categories.map(el => < CategoryCard key={el} category={el}/>) // key={el} - потому что {category} строка ,а не обьект и нет айди // category={el} - пропс потому что только один элемент положить в category
      }
    </div>
  )
}
