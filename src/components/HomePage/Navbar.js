import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars4Icon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const list = () => {
        return(
            <ul>
                <li><button className='bg-[#f9a51a] text-black ml-2 px-6 h-10 rounded-md'>Login</button></li>
                <li>News</li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        )
    }
    return (
        <div className='mb-16 flex gap-5 justify-between'>
            <div className='block md:hidden'>
            <Disclosure>
                <DisclosureButton>
                    <Bars4Icon className="h-10"/>
                </DisclosureButton>
                <DisclosurePanel>
                {list}
                </DisclosurePanel>                
            </Disclosure>   
            </div>
            <div className='hidden md:block'>
                <Link to='/home'><img src='../travel-guru-resources-main/logo.png' alt='Travel Guru' className='h-10 w-auto bg-white rounded-lg p-2 text-white'/></Link>
            </div>
            <div className='hidden sm:block'>
                <form action="" className='h-10 flex border-2 rounded-md pl-2 backdrop-blur-sm bg-white/20'>
                    <i className='fa fa-search icon my-auto'></i>
                    <input 
                    type="text" 
                    placeholder='Search Your Destination...'
                    className='bg-transparent w-full placeholder-white -ml-1 border-none pr-0 lg:w-72 focus:ring-0 focus:placeholder-transparent'                            
                    />
                </form>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-8 h-10 items-center'>
                    <li className='cursor-pointer'>News</li>
                    <li className='cursor-pointer'>Destination</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li><button className='bg-[#f9a51a] text-black ml-2 px-6 h-10 rounded-md'>Login</button></li>
                </ul> 
            </div>
            <div className='block sm:hidden'>
                <i className='fa fa-search icon text-3xl'></i>
            </div>                       
        </div>
    );
};
export default Navbar;