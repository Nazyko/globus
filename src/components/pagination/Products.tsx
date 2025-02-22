import "./Products.css"
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Center, Flex, Loader } from "@mantine/core";
import { Link } from "react-router-dom";
import NextIcon from "../../assets/pagination/right.svg"
import PrevIcon from "../../assets/pagination/left.svg"

export const Products = () => {
  const limit = 12; 
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError, refetch } = useProducts(limit, offset);
  // const [currentPage, setCurrentPage] = useState(1);

  // const total = data?.data.total_records;
  // console.log("total:", total);

  // const totalPage = Math.ceil(total / limit);
  

  useEffect(() => {
    if(!offset){
        refetch()
    }
  }, [offset, refetch])

  const prevPage = () => {
    setOffset((prev) => Math.max(0, prev - limit))
  }
  const nextPage = () => {
    setOffset((prev) => prev + limit)
  }

  if (isError) return <p>Ошибка загрузки</p>;

  return (
    <div className="wrapper">
        <div className="pagination">
            <Flex align='center' justify='space-between'>
              <h2 className="pagination__title">Товары</h2>
            </Flex>
            <ul className="pagination__items">
                {data?.data.items.map((item) => (
                    <Link to={`/details/${item.id}`} key={item.id} className="pagination__item">
                      <img src={item.images[0].image}/>
                      <p>{item.name}</p>
                      <p>{item.price} sum</p>
                    </Link>
                ))}
                {
                  isLoading && <Center h={500}><Loader color="black"/></Center>
                }
            </ul>
            <Flex align='center' justify="flex-start" gap={16} mt={20}>
                <button onClick={prevPage} className="pagination-control-btn">
                    <img src={PrevIcon} alt="" />
                </button>
                <button onClick={nextPage} className="pagination-control-btn">
                    <img src={NextIcon} alt="" />
                </button>
            </Flex>
        </div>
    </div>
  )
}
