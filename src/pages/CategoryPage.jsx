import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    let {category} = useParams()
  return (
    <div>{category}</div>
  )
}

export default CategoryPage