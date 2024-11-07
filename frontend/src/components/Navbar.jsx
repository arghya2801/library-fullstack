import React from 'react';
import { Link } from 'react-router-dom';
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export const Navbar = () => {
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6 '>
            <nav className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <Link to="/">
                        <IoLibrarySharp className='size-8' />
                    </Link>

                    <div className="relative w-60 flex items-center mx-4">
                        <input type="text" placeholder="Search" className="bg-gray-200 w-full rounded-xl pl-10 pr-4 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300"/>
                        <IoIosSearch className="absolute left-3 text-gray-500 inset-y-0 my-auto" />
                    </div>

                </div>
                <div>nav items</div>
            </nav>
        </header>
    )
}
