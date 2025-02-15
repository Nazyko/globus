import React, { useState } from 'react'
import "./CategoryItems.css"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getCategoryProducts } from '../../../service/ProductsService';

interface CategoryItemsProps {
  id: number;
}

export const CategoryItems: React.FC<CategoryItemsProps> = ({ id }) => {
  const limit = 12;
  const [ offset ] = useState<number>(0)

  const {data, isSuccess} = useQuery({
    queryKey: ['category', id],
    queryFn: () => getCategoryProducts(Number(id), offset, limit)
  })

  return (
    <div className="category-items">
      { isSuccess && data?.data.items.map(item => (
        <Link to='' key={item.id} className="category-item">
          <img src={item.images[0].image} alt="" />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </Link>
      ))}
    </div>
  )
}


