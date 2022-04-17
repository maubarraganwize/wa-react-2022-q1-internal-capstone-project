import React, { useEffect, useRef, useState } from "react";
import {
    SliderFrame,
    SliderItem,
    SliderWrapper
} from './slider.styles'

const Slider = ({ items }) => {
    const [current, setCurrent] = useState(0);
    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(() => {
        if (current < items.length - 1) {
            setCurrent(current + 1)
        }
        else {
            setCurrent(0);
        }
        }, 5000);

        return () => {
            clearInterval(interval.current);
        }
    }, [current, items])
    

    return (
        <SliderWrapper>
            <SliderFrame current={current}>
                {items.map(item => <SliderItem key={item.id} src={item.data?.main_image?.url} />)}
            </SliderFrame>
        </SliderWrapper>
    )
}

export default Slider;
