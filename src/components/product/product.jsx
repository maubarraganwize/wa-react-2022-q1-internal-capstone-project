import React from "react";
import { ProductFooter,
    ProductImage,
    ProductHeader,
    ProductName,
    ProductPrice,
    ProductWrapper
} from "./product.styles";

const moneyFormat = Intl.NumberFormat('es-MX');

const Product = ({ item }) => {
    return (
        <ProductWrapper>
            <ProductHeader>{item.data.category.slug}</ProductHeader>
            <ProductImage src={item.data?.mainimage?.url} alt="Some" />
            <ProductFooter>
                <ProductPrice>${moneyFormat.format(item.data.price)}</ProductPrice>
                <ProductName>{item.data.name}</ProductName>
            </ProductFooter>
        </ProductWrapper>
    )
}

export default Product;
