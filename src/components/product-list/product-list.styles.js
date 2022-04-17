import styled from "styled-components";

export const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    text-align: left;
`;

export const ProductListSideBar = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-items: left;
`;

export const ProductListMain = styled.div`
    display: grid;
    justify-content: stretch;
    padding: 1rem;
`;

export const ProductListSideBarTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding: 1rem 0;
`;

export const ProductListFilter = styled.div`
    cursor: pointer;
    font-size: 12px;
    color: grey;
    padding: 0.5rem 5px;
    text-align: left;
    border-radius: 5px;
    background-color: ${props => props.selected ? 'aquamarine' : 'transparent'};
`;

export const PaginationWrapper = styled.div`
    display: grid;
    justify-content: stretch;
    justify-items: center;
`;