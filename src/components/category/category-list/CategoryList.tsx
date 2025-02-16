import React, { useState } from 'react'
import "./CategoryList.css"
import { getCategoryById, getCategoryList, getCategoryProducts } from '../../../service/ProductsService'
import { useQuery } from '@tanstack/react-query'
import { CategoryListResponse } from '../../../types/response/ProductResponse'
import { Center, Flex, Loader } from '@mantine/core'
import { Link } from 'react-router-dom'

interface CategoryListProps {
    active: boolean;
    setActive: (active: boolean) => void
}

export const CategoryList: React.FC<CategoryListProps> = ({ active, setActive }) => {
    const limit = 20;
    const [ offset ] = useState<number>(0)

    const { data, isLoading } = useQuery<CategoryListResponse>({
        queryKey: ['categories'],
        queryFn: getCategoryList,
    })

    const getCategory = (id: number) => {
        getCategoryById(id)
        getCategoryProducts(id, offset, limit)
    }

    return (
        <div className={active ? 'category': 'none'} onClick={() => setActive(false)}>
            <div className='category-inner'>
                <Flex align='center' justify='space-between'>
                    <h3 className="category-title">Каталог</h3>
                </Flex>
                <div className="category-list">
                    {Array.isArray(data?.data?.categories) && (
                        data.data.categories.map(category => (
                            <Link 
                                to={`/category/${category.id}`}
                                key={category.id} 
                                onClick={() => getCategory(category.id)}
                                className="category-list__item">
                                    {category.name}
                            </Link>
                        ))
                    )
                    }
                </div>
                {isLoading && <Center><Loader /></Center>}
            </div>
        </div>
  )
}

