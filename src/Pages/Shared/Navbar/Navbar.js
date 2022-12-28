import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {


    const [open, setOpen] = useState(false);

    return (
        <div className='max-w-[1200px] mx-auto sm:py-5 py-3'>
            <nav className='md:container mx-auto flex justify-between items-center relative'>
                <Link to='/' className='text-2xl font-semibold'>Taskque</Link>
                <ul className={`md:bg-transparent bg-gray-100 rounded-lg md:flex items-center md:justify-end md:static absolute w-full text-center z-10 ${open ? 'top-12' : 'top-[-300px]'}`}>
                    {/* <li className='md:ml-10 md:mb-0 mb-4 md:pt-0 pt-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li> */}
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/addTask'
                        >
                            Add Task
                        </NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/myTask'
                        >
                            My Task
                        </NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/completedTasks'
                        >
                            Completed Task
                        </NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/signIn'
                        >
                            Sign In
                        </NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underline' } : undefined
                            }}
                            className='text-sm font-medium text-secondary hover:text-primary duration-200'
                            to='/register'
                        >
                            Register
                        </NavLink>
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
    );
};

export default Navbar;