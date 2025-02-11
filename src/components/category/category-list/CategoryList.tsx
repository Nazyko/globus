import React from 'react'
import "./CategoryList.css"
import { getCategoryById, getCategoryList } from '../../../service/ProductsService'
import { useQuery } from '@tanstack/react-query'
import { CategoryListResponse } from '../../../types/response/CatergoryResponse'
import { Center, Flex, Loader } from '@mantine/core'
import { Link } from 'react-router-dom'

interface CategoryListProps {
    active: boolean;
    setActive: (active: boolean) => void
}

export const CategoryList: React.FC<CategoryListProps> = ({ active, setActive }) => {

    const { data, isLoading } = useQuery<CategoryListResponse>({
        queryKey: ['categories'],
        queryFn: getCategoryList,
    })

    return (
        <div className={active ? 'category': 'none'} onClick={() => setActive(false)}>
            <div className='category-inner'>
                <Flex align='center' justify='space-between'>
                    <h3 className="category-title">Каталог</h3>
                    <button onClick={() => setActive(false)} className='category__close-btn'>x</button>
                </Flex>
                <div className="category-list">
                    {Array.isArray(data?.data?.categories) && (
                        data.data.categories.map(category => (
                            <Link 
                                to={`/category/${category.id}`}
                                key={category.id} 
                                onClick={() => getCategoryById(category.id)}
                                className="category-list__item">
                                    {category.name}
                            </Link>
                        ))
                    )
                    }
                </div>
                {isLoading && <Center> <Loader /> </Center>}
            </div>
        </div>
  )
}

