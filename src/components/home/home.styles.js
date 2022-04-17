import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Banners = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    height: 400px;
    width: 100%;
    text-align: center;
    background-color: #cbf1e4;
    padding: 1rem;
`;

export const Categories = styled.div`
    width: 100%;
    background-color: #9be2d4;
    margin-bottom: 2rem;
`;

export const Products = styled.div`
    display: grid;
    justify-content: stretch;
    width: 100%;
`;

export const ViewAllProducts = styled.div`
    cursor: pointer;
    text-align: left;
    padding: 2rem;
`;
