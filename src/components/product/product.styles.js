import styled from "styled-components";

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    position: relative;
`

const ProductImage = styled.img`
    height: 200px;
`;

const ProductHeader = styled.div`
    background-color: aquamarine;
    border-radius: 5px;
    width: fit-content;
    padding: 2px 5px;
    font-size: 12px;
    text-transform: capitalize;
`;

const ProductFooter = styled.div`
    border-top: 1px lightgrey solid;
    padding: 10px 0px;
    text-align: left;
`

const ProductPrice = styled.div`
`;

const ProductName = styled.div`
`;

export {
    ProductFooter,
    ProductImage,
    ProductHeader,
    ProductName,
    ProductPrice,
    ProductWrapper
};
