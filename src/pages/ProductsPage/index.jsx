import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsPage() {
console.log(useParams())

const {category} = useParams()
console.log(category)
  return (
    <div>{category}</div>
  )
}
