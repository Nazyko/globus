import React, { ChangeEventHandler, useEffect, useState } from 'react'
import "./Search.css"
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchProducts } from '../../service/ProductsService';
import { Center, Flex, Loader } from '@mantine/core';
import NextIcon from "../../assets/pagination/right.svg"
import PrevIcon from "../../assets/pagination/left.svg"

export const Search: React.FC = () => {
    const [text, setText] = useState<string>("")
    const [offset, setOffset] = useState(0);
    const limit = 20

    const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    const { data, isLoading, isSuccess, refetch } = useQuery({
        queryKey: ['search', text, offset],
        queryFn: () => searchProducts(limit, offset, text),
        enabled: !!text
    })

    useEffect(() => {
        if(!text) {
            refetch()
        }
        
    }, [text, refetch])

    useEffect(() => {
        if(!offset) {
            refetch()
        }
    }, [offset, refetch])

    const prevPage = () => {
        if(text == "") return;
        setOffset((prev) => Math.max(0, prev - limit))
    }

    const nextPage = () => {
        if(text == "") return;
        setOffset((prev) => prev + limit)
    }
    
    return (
        <div className="wrapper">
            <div className="search">
                <div className="search__inner">
                    <div className='search__container'>
                        <input 
                            onChange={handleSearch}
                            type="text" 
                            className="search__input" 
                            placeholder='Ищу...'/>
                        <Link to='/' className='search__button'>Отменить</Link>
                    </div>
                    {
                        data?.data?.items?.length === 0 && <div>Продукт не найден</div>
                    }
                    <div className='search-pagination'>
                        <div className="search-pagination__items">
                            { isSuccess && data.data.items.map(item => (
                                <Link to={`/details/${item.id}`} key={item.id} className='search-pagination__item'>
                                    <img src={item.images?.[0]?.image || "fallback.jpg"} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </Link>
                            ))}
                            
                        </div>
                        <Flex align='center' justify="flex-start" gap={16} mt={20}>
                            <button onClick={prevPage} disabled={text === ""} className="pagination-control-btn">
                                <img src={PrevIcon} alt="" />
                            </button>
                            <button onClick={nextPage} disabled={text === ""} className="pagination-control-btn">
                                <img src={NextIcon} alt="" />
                            </button>
                        </Flex>
                        {
                            isLoading && <Center h={100}><Loader color='black'/></Center> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


