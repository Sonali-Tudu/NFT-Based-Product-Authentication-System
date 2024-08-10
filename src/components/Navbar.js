import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className=' bg-gray-800'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8  '>
                <div className='flex items-center justify-between h-16  '>
                    <div className='flex items-center ml-10 gap-10' >
                        <Link to="/" className='text-white'>Home</Link>
                        <Link to="/about" className='text-white'>About</Link>
                        <Link to="/contactUs" className='text-white'>Contact Us</Link>
                    </div>
                    {/*navlinks*/}

                </div>
            </div>

        </div>

    );
}

export default Navbar;
