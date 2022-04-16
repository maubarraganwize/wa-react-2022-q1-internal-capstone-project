import React from "react";
import Content from '../content/content';
import Footer from '../footer/footer';
import Header from '../header/header';
import { LayoutContainer } from './layout.styles'

function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Content />
            <Footer />
        </LayoutContainer>
    )
}

export default Layout;