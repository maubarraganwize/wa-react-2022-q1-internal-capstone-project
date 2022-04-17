import React from "react";
import banners from "../../mocks/es-mx/featured-banners.json";
import categories from "../../mocks/es-mx/product-categories.json";
import products from "../../mocks/es-mx/featured-products.json";
import Slider from "../slider/slider";
import Grid from "../grid/grid";
import Product from "../product/product";
import Carrousel from "../carrousel/carrousel";
import Category from "../category/category";
import ProductList from "../product-list/product-list";
import { Banners, Categories, HomeContainer, Products, ViewAllProducts } from "./home.styles";

const Home = ({ viewAllProducts =  false, setViewAllProducts }) => {
    const handleViewAllProduct = () => {
        if (setViewAllProducts) {
            setViewAllProducts(true);
        }
    }
    return (
        <HomeContainer>
            <Banners>
                <Slider items={banners.results} />
            </Banners>
            <Categories>
                <Carrousel>
                    {categories.results.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
                </Carrousel>
            </Categories>
            <Products>
                {viewAllProducts ? (
                    <ProductList />
                ) : (
                    <>
                        <ViewAllProducts onClick={handleViewAllProduct}>View all products &gt;</ViewAllProducts>
                        <Grid>
                            {products.results.map(item => (
                                <Product key={item.id} item={item} />
                            ))}
                        </Grid>
                    </>
                )}
            </Products>
        </HomeContainer>
    );
}

export default Home;