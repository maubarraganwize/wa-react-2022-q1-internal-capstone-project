import React from "react";
import banners from "../../mocks/es-mx/featured-banners.json";
import categories from "../../mocks/es-mx/product-categories.json";
import products from "../../mocks/es-mx/featured-products.json";
import Slider from "../slider/slider";
import Grid from "../grid/grid";
import Product from "../product/product";
import Carrousel from "../carrousel/carrousel";
import Category from "../category/category";
import { Banners, Categories, HomeContainer, Products } from "./home.styles";

const Home = () => (
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
            <Grid>
                {products.results.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </Grid>
        </Products>
    </HomeContainer>
)

export default Home;