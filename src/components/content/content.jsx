import React from "react";
import Home from "../home/home";
import { ContentContainer } from "./content.styles";

function Content({ viewAllProducts = false,  setViewAllProducts }) {
    return (
        <ContentContainer>
            <Home viewAllProducts={viewAllProducts} setViewAllProducts={setViewAllProducts} />
        </ContentContainer>
    )
}

export default Content;