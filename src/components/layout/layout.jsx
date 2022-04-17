import React, { useState } from "react";
import Content from '../content/content';
import Footer from '../footer/footer';
import Header from '../header/header';
import { LayoutContainer } from './layout.styles'

function Layout() {
    const [viewAllProducts, setViewAllProducts] = useState(false);
    return (
        <LayoutContainer>
            <Header viewAllProducts={viewAllProducts} setViewAllProducts={setViewAllProducts} />
            <Content viewAllProducts={viewAllProducts} setViewAllProducts={setViewAllProducts} />
            <Footer />
        </LayoutContainer>
    )
}

export default Layout;