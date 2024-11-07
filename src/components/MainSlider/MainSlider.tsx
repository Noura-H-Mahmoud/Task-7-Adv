'use client';

import { useEffect, useState } from 'react';
import CardDestinantions from '../CardDestinantions/CardDestinantions';
import ArrowLeft from '@/app/assets/images/svgFiles/ArrowLeft';
import ArrowRight from '@/app/assets/images/svgFiles/ArrowRight';
import ButtonSlider from './ButtonSlider';
import CardCustomer from '../Customers/CardCustomer';
import { StaticImageData } from 'next/image';

interface CardDataProps {
    src: string;
    h3: string;
    para: string;
    span: string;
    para1: string;
    para2: string;
    text: string;
}

interface DataCustomerProps {
    img: StaticImageData;
    customerName: string;
    text: string;
}

interface MainSliderProps {
    slides: CardDataProps[] | DataCustomerProps[];
    num?: number;
    className?: string;
}

export default function MainSlider({ slides, num = 4, className }: MainSliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [slidesToShow, setSlidesToShow] = useState<number>(num);
    const [activeButton, setActiveButton] = useState<'prev' | 'next'>('next');

    const totalSlides: number = slides.length;

    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesToShow(1);
            } else if (width < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(num);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, [num]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
        setActiveButton('prev');
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setActiveButton('next');
    };

    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
        visibleSlides.push(slides[(currentIndex + i) % totalSlides]);
    }

    return (
        <div className="slider-container relative w-full">
            <div className="w-full overflow-visible relative">
                <div className="absolute top-4 lg:-top-10 right-4 flex gap-2 z-10">
                    <ButtonSlider
                        onClick={handlePrevClick}
                        ariaLabel="Previous Slide"
                        component={<ArrowLeft color={activeButton === 'prev' ? "white" : "#333333"} />}
                        className={activeButton === 'prev' ? "bg-mainColor" : ""}
                    />
                    <ButtonSlider
                        onClick={handleNextClick}
                        ariaLabel="Next Slide"
                        component={<ArrowRight color={activeButton === 'next' ? "white" : "#333333"} />}
                        className={activeButton === 'next' ? "bg-mainColor" : ""}
                    />
                </div>

                <div className={`flex gap-33 pt-24 lg:pt-60 ${className}`}>
                    {visibleSlides.map((slide, index) => (
                        <div key={index} className={num ? "w-full" : "w-[23.2558139534%]"}>
                            {'h3' in slide ? (
                                <CardDestinantions data={slide as CardDataProps} />
                            ) : (
                                <CardCustomer data={slide as DataCustomerProps} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
