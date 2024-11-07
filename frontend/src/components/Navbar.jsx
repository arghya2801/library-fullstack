import React from 'react';
import { Link } from 'react-router-dom';
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export const Navbar = () => {
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6 '>
            <nav className='flex justify-between items-center'>
                <div className='flex justify-between'>
                    <Link to="/">
                        <IoLibrarySharp className='size-7' />
                    </Link>

                    <div className='relative space-x-2 w-60'>
                        <IoIosSearch className='absolute inline-block space-x-2 inset-y-2'/>
                        <input type="text" placeholder='Search' className='bg-gray-200 w-full rounded-xl px-4 py-1 focus:outline-none' />
                    </div>

                </div>
                <div>nav items</div>
            </nav>
        </header>
    )
}
