import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Navbar from './Navbar';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 40000, min: 3000 },
        items: 2,
        partialVisibilityGutter: 100
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 100
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 100
    }
};
const CarouselHome = () => {
    //Demo Image Data
    const imgs = [{
        id: 1,
        link: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80',
        alt: 'image-1',
    },
    {
        id: 2,
        link: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80',
        alt: 'image-2',
    },
    {
        id: 3,
        link: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80',
        alt: 'image-3',
    },
    ]
    const placeData = [
        {
            id: 1,
            link: '../travel-guru-resources-main/images/Rectangle 1.png',
            bglink: '../travel-guru-resources-main/images/Rectangle 1.png',
            alt: "Cox's Bazar",
            title: 'Cox\'s Bazar',
            description: 'Cox\'s Bazar is a city in Bangladesh. It is known for its rich history, vibrant culture, and diverse food scene.',
        },
        {
            id: 2,
            link: '../travel-guru-resources-main/images/sundorbon.png',
            bglink: '../travel-guru-resources-main/images/SundarbanBack.png',
            alt: 'Sundarban',
            title: 'Sundarban',
            description: 'Sundarban is a coastal city in Bangladesh. It is known for its beautiful beaches, diverse flora, and vibrant culture.',
        },
        {
            id: 3,
            link: '../travel-guru-resources-main/images/Sreemongol.png',
            bglink: '../travel-guru-resources-main/images/sreemongolback.jpg',
            alt: 'Sreemongol',
            title: 'Sreemongol',
            description: "Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields.",
        },
        {
            id: 4,
            link: '../travel-guru-resources-main/images/Sajek.png',
            bglink: '../travel-guru-resources-main/images/SajekBack.jpg',
            alt: 'Sajek',
            title: 'Sajek',
            description: 'Sajek is located in the verdant hills of Kasalong range of mountains amidst the serene and exotic beauty of nature. Lofty mountains, dense forest, sprawling grasslands and miles of hilly tracks feature the valley.',
        }
    ]
    const [allData, setAllData] = useState([placeData]);
    const [currentPlace, setCurrentPlace] = useState(placeData[0]);
    const handleImageChange = (id) => {
        const img = placeData.find(img => img.id === id);
        placeData[0] = img;
        setAllData([placeData]);
        setCurrentPlace(img);       
    }

    const previoustImg = () => {
        const currentIndex = placeData.findIndex(img => img.id === currentPlace.id);
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
            setCurrentPlace(placeData[previousIndex]);
        }
        else {
            setCurrentPlace(placeData[placeData.length - 1]);
        }
    }
    const nextImg = () => {
        const currentIndex = placeData.findIndex(img => img.link === currentPlace.link);
        const nextIndex = currentIndex + 1;
        if (nextIndex < placeData.length) {
            setCurrentPlace(placeData[nextIndex]);
        }
        else {
            setCurrentPlace(placeData[0]);
        }
    }
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="text-black carousel-button-group bg-transparent w-[60%] text-center absolute bottom-[5%] left-[20%] right-[20%]">
                <button className={`bg-white rounded-full p-2 ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => { previous(); previoustImg() }}>
                    <ChevronLeftIcon className='size-4' />
                </button>
                <button className='bg-white rounded-full p-2 ml-2' onClick={() => { next(); nextImg() }}>
                    <ChevronRightIcon className='size-4' />
                </button>
            </div>
        );
    };
    return (
        <>
            <div style={{ backgroundImage: `url('${(currentPlace.bglink)}')` }}
                className='bg-cover bg-center object-cover object-center w-full h-screen text-white'
            >
                <div className='backdrop-brightness-[0.35] h-screen'>
                    <div className='px-5 sm:px-8 pt-5 sm:pt-8'>
                        <Navbar /></div>
                    <div className='pl-5 sm:pl-8 block md:flex gap-2 justify-between'>
                        <div className='md:w-[50%] my-auto mr-8 sm:mr-0'>
                            <h1 className='text-4xl sm:text-6xl font-bold'>{currentPlace.title}</h1><br />
                            <p>{currentPlace.description}</p><br />
                            <button className='bg-[#f9a51a] text-black px-6 h-10 rounded-md font-bold'>Booking &#x2192;</button><br /><br />
                        </div>
                        <Carousel responsive={responsive}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                            infinite
                            swipeable={true}
                            draggable={false}
                            focusOnSelect={true}
                            keyBoardControl={true}
                            arrows={false}
                            partialVisible={true}                           
                            className='md:w-[50%]'
                        >
                            {
                                placeData.map((img) => (
                                    <div className=''>
                                    <img
                                        src={img.bglink}
                                        className={`relative object-cover object-center h-96 w-[95%] rounded-3xl cursor-pointer ${img.id === currentPlace.id ? 'border-4 border-[#f9a51a]' : 'border-4 border-transparent brightness-[0.3]'}`} alt={img.alt}
                                        onClick={() => handleImageChange(img.id)}
                                    />
                                    <div className='absolute bottom-[2.5%] left-[0%] font-bold text-2xl bg-gradient-to-b from-transparent via-black w-[91.5%] pl-2.5 ml-1 h-10 rounded-xl'>{img.title}</div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselHome;