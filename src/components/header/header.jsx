import React from "react";
import SearchIconImage from '../../images/search-icon.png';
import CartIconImage from '../../images/cart-icon.png';
import LogoImage from '../../images/logo.png';
import { CartIcon, HeaderContainer, Logo, Search, SearchBox, SearchIcon } from './header.styles'

function Header() {
    return (
        <HeaderContainer>
            <Logo alt="Logo" src={LogoImage} />
            <Search>
                <SearchBox type="text" placeholder="Search something..." />
                <SearchIcon alt="Search" src={SearchIconImage} />
            </Search>
            <CartIcon alt="Cart" src={CartIconImage} />
        </HeaderContainer>
    )
}

export default Header;