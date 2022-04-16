import React from "react";
import { CategoryItem, CategoryItemTitle, CategoryItemImage } from "./category.styles";

const Category = ({ category }) => (
    <CategoryItem>
        <CategoryItemTitle>{category.data.name}</CategoryItemTitle>
        <CategoryItemImage src={category.data.main_image.url} />
    </CategoryItem>
)

export default Category;
