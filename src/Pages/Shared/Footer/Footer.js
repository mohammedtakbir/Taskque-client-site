import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-gray-50'>
            <footer class="p-4 rounded-lg md:px-6 md:py-8 bg-gray-50">
                <div class="sm:flex sm:items-center sm:justify-between max-w-[1200px] mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                        <img src={logo} class="mr-3 h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">TaskQue</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                        <li>
                            <Link href="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">TaskQue™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};

export default Footer;