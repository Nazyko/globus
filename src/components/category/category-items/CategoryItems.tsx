import React from 'react'
import "./CategoryItems.css"
import { Link } from 'react-router-dom'

interface CategoryItemsProps {
}

export const CategoryItems: React.FC<CategoryItemsProps> = () => {



  return (
    <div className="category-items">
      {items.map(item => (
        <Link to='' key={item.id} className="category-item">
          <img src={item.images[0].image} alt="" />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </Link>
      ))}
    </div>
  )
}


