import React from "react";
import { GridWrapper } from "./grid.styles";


const Grid = ({ children }) => {
    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}

export default Grid;
