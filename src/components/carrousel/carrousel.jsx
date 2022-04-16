import React from "react";
import { CarrouselWrapper } from "./carrousel.styles";

const Carrousel = ({ children }) => (
    <CarrouselWrapper>
        {children}
    </CarrouselWrapper>
)

export default Carrousel;
