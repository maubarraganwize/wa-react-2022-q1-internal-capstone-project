import styled from "styled-components";

export const CategoryItem = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 10px;
`;

export const CategoryItemTitle = styled.div`
    text-align: center;
    font-weight: bold;
`;

export const CategoryItemImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`;