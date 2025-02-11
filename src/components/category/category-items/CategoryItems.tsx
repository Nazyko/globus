import React from 'react'
import "./CategoryItems.css"
import { useQuery } from '@tanstack/react-query'
import { AllProductsResponse } from '../../../types/response/CatergoryResponse'
import { getAllProducts } from '../../../service/ProductsService'

export const CategoryItems: React.FC = () => {

  const { data, isSuccess } = useQuery<AllProductsResponse>({
    queryKey: ['products'],
    queryFn: () => getAllProducts()
  })

  if(!isSuccess) return;
  console.log(data);
  

  return (
    <div className="category-items">

    </div>
  )
}


