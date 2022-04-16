import styled from 'styled-components';

const SliderWrapper = styled.div`
    width: 600px;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
`;

const SliderFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    transition: left 1s;
    left: -${props => props.current ? props.current * 600 : 0}px;
`;

const SliderItem = styled.img`
    width: 600px;
    height: 400px;
`;

export { SliderWrapper, SliderItem, SliderFrame };
