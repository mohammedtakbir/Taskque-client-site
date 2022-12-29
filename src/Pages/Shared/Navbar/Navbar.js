import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(false);
    const { userSignOut, user } = useContext(AuthContext);

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem('theme', JSON.stringify(!theme))
    }

    useEffect(() => {
        if (theme) {
            document.querySelector('html').setAttribute('class', 'dark');
        } else {
            document.querySelector('html').setAttribute('class', 'light');
        }
    }, [theme])

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem('theme'))
        setTheme(theme);
    }, [theme])

    const handleSignOut = () => {
        userSignOut()
            .then(res => {
                toast.success('Sign Out Successfully')
            })
            .catch(err => { })
    }


    return (
        <div className='bg-gray-50 dark:bg-gray-700'>
            <div className='max-w-[1200px] mx-auto py-3'>
                <nav className='md:container sm:mx-auto flex justify-between items-center relative mx-2'>
                    <Link to='/' className='text-2xl font-medium dark:text-white md:ml-0 ml-3'>TaskQue</Link>
                    <ul className={`md:bg-transparent bg-gray-200 dark:bg-gray-700 rounded-lg md:flex items-center md:justify-end md:static absolute w-full text-center z-10 ${open ? 'top-12' : 'top-[-300px]'}`}>
                        <li onClick={() => setOpen(!open)} className='md:ml-10 md:mb-0 mb-3 md:mt-0 mt-4'>
                            <NavLink
                                onClick={() => setOpen(!open)}
                                style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underline' } : undefined
                                }}
                                className='text-sm font-medium text-secondary hover:text-primary duration-200 dark:text-white'
                                to='/addTask'
                            >
                                Add Task
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(!open)} className='md:ml-10 md:mb-0 mb-3'>
                            <NavLink
                                onClick={() => setOpen(!open)}
                                style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underline' } : undefined
                                }}
                                className='text-sm font-medium text-secondary hover:text-primary duration-200 dark:text-white'
                                to='/myTask'
                            >
                                My Task
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(!open)} className={`md:ml-10 md:mb-0 ${user?.uid ? 'mb-2' : 'mb-4'}`}>
                            <NavLink
                                onClick={() => setOpen(!open)}
                                style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underline' } : undefined
                                }}
                                className='text-sm font-medium text-secondary hover:text-primary duration-200 dark:text-white'
                                to='/completedTasks'
                            >
                                Completed Task
                            </NavLink>
                        </li>

                        {user ?
                            <>
                                <li onClick={handleSignOut} className='md:ml-10 md:mb-0 mb-3'>
                                    <button className='text-sm font-medium text-secondary hover:text-primary duration-200 dark:text-white'>Sign Out</button>
                                </li>
                            </>
                            :
                            <>
                                <li onClick={() => setOpen(!open)} className='md:ml-10 md:mb-0 mb-6'>
                                    <NavLink
                                        onClick={() => setOpen(!open)}
                                        style={({ isActive }) => {
                                            return isActive ? { textDecoration: 'underline' } : undefined
                                        }}
                                        className='text-sm font-medium text-secondary hover:text-primary duration-200 bg-white shadow-sm py-2 px-3 rounded-lg hover:shadow-md dark:bg-[#ececec] dark:hover:bg-white'
                                        to='/signIn'
                                    >
                                        Sign In
                                    </NavLink>
                                </li>
                                <li onClick={() => setOpen(!open)} className='md:ml-8 md:mb-0 mb-5'>
                                    <NavLink
                                        className='py-2 px-3 text-white text-sm duration-200 bg-gray-700 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-700 font-medium rounded-lg'
                                        to='/register'
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        }




                        <li onClick={() => setOpen(!open)} className='md:ml-8 md:mb-0 mb-4'>
                            <button title={`${theme ? 'Light' : 'Dark'}`} onClick={handleThemeChange}>
                                {
                                    theme ? <BsFillSunFill className='text-white' /> : <BsFillMoonFill className='text-gray-700' />
                                }
                            </button>
                        </li>
                    </ul>
                    <div className='md:hidden md:pr-0 pr-3'>
                        {
                            open ?
                                <HiX onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer text-primary" /> :
                                <HiMenuAlt3 onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer text-primary" />
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;