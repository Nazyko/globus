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
        <h3 className="category-aside__title">Цена UZS</h3>
        <div className="category-aside__price-box">
          <div className="category-aside__price">
            от
            <input 
              value={min}
              type="text"/> 
          </div>
          
          <div className="category-aside__price">
            до
            <input 
              value={max}
              type="text"/>
          </div>
        </div>
        <RangeSlider min={min} max={max} color='black' className="range-slider"/>
    </Flex>
  )
}


