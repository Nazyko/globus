import { useParams } from "react-router-dom";
// import { CategoryItems } from "../components/category/category-items/CategoryItems";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../service/ProductsService";
import { SingleCategoryResponse } from "../types/response/ProductResponse";
import { Flex } from "@mantine/core";
import { CategoryAside } from "../components/category/category-aside/CategoryAside";

export const CatalogPage = () => {
  const { id } = useParams()
  
  const { data, isSuccess } = useQuery<SingleCategoryResponse>({
    queryKey: ['category'],
    queryFn: () =>  getCategoryById(Number(id))
  })

  if (!isSuccess) return null;

  const min = Number(data?.data.categories.min_price) || 0;
  const max = Number(data?.data.categories.max_price) || 100; 
  

  return (
    <Flex mt={44}>
      <Flex className="wrapper catalog" direction='column' gap={24}>
        <h3 className="catalog-title">Каталог: {data?.data.categories.name}</h3>
        <Flex>
          <CategoryAside min={min} max={max}/>
          {/* <CategoryItems /> */}
        </Flex>
      </Flex>
    </Flex>
  )
}
