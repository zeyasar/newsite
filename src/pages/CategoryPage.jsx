import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewsContext } from '../context/NewsContext'

const CategoryPage = () => {
    let {category} = useParams()
    const {getCategoryNews, categoryData} = useContext(NewsContext)
    

    useEffect(() => {
      getCategoryNews(category)
    }, [category])

    console.log(categoryData)
    
  return (
    <div>{category}</div>
  )
}

export default CategoryPage