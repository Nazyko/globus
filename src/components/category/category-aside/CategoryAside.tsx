import { Flex, RangeSlider } from "@mantine/core"
import React from "react";
import "./CategoryAside.css"

interface CategoryAsideProps {
    min: number;
    max: number;
}

export const CategoryAside: React.FC<CategoryAsideProps> = ({ min, max }) => {

  return (
    <Flex className="category-aside" gap={15} direction="column">
        <h3 className="category-aside__title">Цена so'm</h3>
        <RangeSlider min={min} max={max} w={200} color='black' className="range-slider"/>
    </Flex>
  )
}


