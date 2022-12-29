import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-700'>
            <footer className="p-4 rounded-lg md:px-6 md:py-8 bg-gray-100 dark:bg-gray-700">
                <div className="sm:flex sm:items-center sm:justify-between max-w-[1200px] mx-auto">
                    <Link to='/' className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="mr-3 h-8" alt="TaskQue logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TaskQue</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                        <li>
                            <Link to='/' className="mr-4 hover:underline md:mr-6 dark:text-white">About</Link>
                        </li>
                        <li>
                            <Link to='/' className="mr-4 hover:underline md:mr-6 dark:text-white">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to='/' className="mr-4 hover:underline md:mr-6 dark:text-white">Licensing</Link>
                        </li>
                        <li>
                            <Link to='/' className="hover:underline dark:text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-[#ddd]">
                    © 2022 <Link to='/' className="hover:underline font-medium"> TaskQue™</Link>. All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};

export default Footer;