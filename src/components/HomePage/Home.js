import React from 'react';
import Navbar from './Navbar';
import Display from './Display';
import Carousel from './Carousel';
const Home = () => {    
    return (
        <div style={{backgroundImage: "url('../travel-guru-resources-main/images/Rectangle 1.png')"}}
        className='bg-cover bg-right-bottom w-full h-screen text-white'
        >
        <div className="p-5 md:p-10 backdrop-brightness-[0.35] h-screen">
            <Navbar/>
            <Display/>
            <Carousel/>
        </div>
        </div>
    );
};

export default Home;