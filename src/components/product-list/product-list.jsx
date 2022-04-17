import React, { useState } from "react";
import { ProductListFilter, ProductListMain, ProductListSideBar, ProductListSideBarTitle, ProductListContainer, PaginationWrapper } from "./product-list.styles";
import categories from "../../mocks/es-mx/product-categories.json";
import productsList from "../../mocks/es-mx/featured-products.json";
import Grid from "../grid/grid";
import Product from "../product/product";
import Pagination from "../pagination/pagination";

const ProductList = () => {
    const handleFilterClick = (category) => {
        let categories = [...selectedCategories];
        if (categories.includes(category)) {
            categories = categories.filter(c => c !== category);
        } else {
            categories.push(category)
        }
        setSelectedCategories(categories);
    }
    const [selectedCategories, setSelectedCategories] = useState([]);

    let filteredProducts;
    if (selectedCategories.length > 0) {
        filteredProducts = productsList.results.filter(product => selectedCategories.includes(product.data.category.id));
    } else {
        filteredProducts = productsList.results;
    }
    
    return (
        <ProductListContainer>
            <ProductListSideBar>
                <ProductListSideBarTitle>Categories</ProductListSideBarTitle>
                {categories.results.map(category => (<ProductListFilter selected={selectedCategories.includes(category.id)} key={category.id} onClick={() => {handleFilterClick(category.id)}}>{category.data.name}</ProductListFilter>))}
            </ProductListSideBar>
            <ProductListMain>
                <Grid>
                    {filteredProducts.map(product => (
                        <Product key={product.id} item={product} />
                    ))}
                </Grid>
                <PaginationWrapper><Pagination page={1} totalItems={filteredProducts.length} /></PaginationWrapper>
            </ProductListMain>
        </ProductListContainer>
    );
}

export default ProductList;