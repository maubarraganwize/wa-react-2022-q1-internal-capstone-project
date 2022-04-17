import styled from "styled-components";

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    padding: 1rem;
`;

export { GridWrapper };
