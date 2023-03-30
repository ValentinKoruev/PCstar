'use client';

import { CSSProperties, MouseEventHandler, TransitionEventHandler,  useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';

export interface ISlider {
    images: Array<{src: string, alt: string}>
}


const Slider = ({images=[]} : ISlider) => {
    const [slide, setSlide] = useState<number>(1);
    const [isMoving, setIsMoving] = useState<boolean>(false);
    const [sliderStyle, setSliderStyle] = useState<CSSProperties>({transform: 'translateX(-100%)'})
    const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>()


    const imagesWithoutDuplicates = images.slice(1, -1);

    const calculateSlide = (slide : number) => {
        if(slide == 0) return images.length - 2;
        else if(slide == images.length - 1) return 1;
        return slide; 
    }
    
    const setNewInterval = () => {
        const newIntervalId = setInterval(() => {
            setIsMoving(true);
            setSliderStyle({
                ...sliderStyle,
                transition: `transform 450ms ease-in-out`,
            })
            setSlide(slide => slide + 1)
        }, 4000);
        setIntervalId(newIntervalId);
    }



    useEffect(() => {
        
        setNewInterval();

        return () => {
            clearInterval(intervalId);
        }
    }, [])


    useEffect(() => {
        setSliderStyle({
            ...sliderStyle,
            transform: `translateX(${-slide * 100}%)`
        })
    }, [slide]);

    const handleLeftClick : MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        if(!isMoving) {
            setIsMoving(true);
            setSliderStyle({
                ...sliderStyle,
                transition: `transform 450ms ease-in-out`,
            })
            setSlide(slide => slide - 1)
        };     
    }

    const handleRightClick : MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        
        if(!isMoving) {
            setIsMoving(true);
            setSliderStyle({
                ...sliderStyle,
                transition: `transform 450ms ease-in-out`,
            })
            setSlide(slide => slide + 1)
        };     
    }

    const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        if(slide <= 0) {
            setSliderStyle({
                ...sliderStyle,
                transition: `none`
            })
            setSlide(images.length - 2);
        } else if(slide >= images.length - 1) {
            setSliderStyle({
                ...sliderStyle,
                transition: `none`
            })
            setSlide(1);
        }
        setIsMoving(false);      
    }

    const handleSlideSelectClick = (idx: number) => {
        setIsMoving(true);
        setSliderStyle({
            ...sliderStyle,
            transition: `transform 450ms ease-in-out`,
        })
        setSlide(idx)
    }

    const handleMouseEnter : MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        clearInterval(intervalId);
    }

    const handleMouseLeave : MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        setNewInterval();
    }

   

    return (
        <section className={`container ${styles.sliderContainer}`}>
            <div className={styles.whiteSpace}></div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.slider}>
                <div className={styles.sliderProgressContainer}>
                    <div className={styles.slideSelectButtonContainer}>
                        {
                            imagesWithoutDuplicates.map((image, idx) => {
                                return <button className={calculateSlide(slide) == idx + 1 ? styles.slideSelectButtonActive : styles.slideSelectButton} key={idx+1} onClick={() => handleSlideSelectClick(idx+1)} />
                            })
                        }
                    </div>
                </div>
                <div className={styles.sliderButtonContainer}>
                    <button onClick={handleLeftClick} className={`${styles.sliderButton} ${styles.sliderButtonLeft}`} aria-label="Move to previous slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button onClick={handleRightClick} className={`${styles.sliderButton} ${styles.sliderButtonRight}`} aria-label="Move to next slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
                <div onTransitionEnd={handleTransitionEnd} style={sliderStyle} className={styles.slide}>
                    {
                        images.map((image, index) => {
                            return (
                                <div key={index} className={styles.slideImageContainer}>
                                    <Image src={image.src} alt={image.alt} fill={true} loading={'eager'}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}


export default Slider;