import React from 'react';
import CarouselHome from './Carousel';
const imgs = [{
    id: 1,
    link: '../travel-guru-resources-main/images/Rectangle 1.png',
    alt: "Cox's Bazar",
},
{
    id: 2,
    link: '../travel-guru-resources-main/images/sundorbon.png',
    alt: 'Sundarban',
},
{
    id: 3,
    link: '../travel-guru-resources-main/images/Sreemongol.png',
    alt: 'Sreemongol',
},]

const Display = () => {
    return (
        <div className='block lg:flex gap-8'>
            <div className='w-[100%] lg:[40%]'>
                <h1 className='text-6xl font-bold'>COX'S BAZAR</h1><br />
                <p>
                    Cox's Bazar is a city in Bangladesh. It is known for its rich history, vibrant culture, and diverse food scene. The city is famous for its traditional tea ceremonies, which are performed in the traditional tea houses.
                </p><br />
                <p>
                    <button className='bg-[#f9a51a] text-black ml-2 px-6 h-10 rounded-md font-bold'>Booking &#x2192;</button>
                </p><br />
            </div>
            <div className='w-[100%] lg:[60%] flex gap-4'>                
                <CarouselHome/>               
            </div>
        </div>
    );
};
export default Display;