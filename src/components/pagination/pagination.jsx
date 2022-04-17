import React from "react";
import { PaginationContainer } from "./pagination.styles";

const Pagination = ({ page, totalItems }) => {
    return (
        <PaginationContainer>
            <div>First</div>
            <div>Previous</div>
            <div>{page}</div>
            <div>Next</div>
            <div>Last</div>
        </PaginationContainer>
    )
}

export default Pagination;