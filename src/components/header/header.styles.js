import styled from 'styled-components';

export const Logo = styled.img`
    width: 170px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr 75px;
    grid-gap: 10px;
    align-content: center;
    align-items: center;
    justify-items: center;
    background-color: 	#9be2d4;
`;

export const Search = styled.div`
    position: relative;
    justify-self: stretch;
`;

export const SearchBox = styled.input`
    border-radius: 10px;
    border: 1px #b8f0e3 solid;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 15px;
`;

export const SearchIcon = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    width: 20px;
    height: 20px;
`;

export const CartIcon = styled.img`
    width: 20px;
    height: 20px;
`;