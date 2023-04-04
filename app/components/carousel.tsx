import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
  width: 100%
`;

interface ICarouselSlide {
    active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
  padding:20px;
`;

interface ICarouselProps {
    currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
        props.currentSlide &&
        css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
  width: 100%
`;

interface IProps {
    children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);



    useEffect(() => {

        const sliderAutoRun = setTimeout(() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }, 3000);

        return () => {
            clearTimeout(sliderAutoRun);
        }
    }, [currentSlide])





    const activeSlide = children.map((slide, index) => (
        <SCarouselSlide active={currentSlide === index} key={index}>
            {slide}
        </SCarouselSlide>
    ));

    const activeDot = children.map((slide, index) => (
        <div className={currentSlide === index ? "bg-gray-300 w-12 h-2 rounded-lg mx-2" : "bg-gray-200 w-12 h-2 rounded-lg mx-2"}>
        </div>
    ))

    return (
        <div className="flex flex-col items-center overflow-hidden">
            <SCarouselWrapper>
                <SCarouselSlides currentSlide={currentSlide}>
                    {activeSlide}
                </SCarouselSlides>
            </SCarouselWrapper>
            <div className="flex flex-row justify-evenly">
                {activeDot}
            </div>

        </div>
    );
};

export default Carousel;