import React from 'react';

const Header = () => {
    return (
        <div className='h-[90vh] flex items-center bg-[#EFF3F6] dark:bg-gray-800'>
            <div className='container mx-auto text-center'>
                <div className=' md:mx-0 mx-2'>
                    <span className='bg-gray-700 text-white text-[11px] py-1 px-3 rounded-2xl font-medium'>TASK MANAGEMENT</span>
                    <h2 className='md:text-5xl sm:text-4xl text-3xl font-light leading-tight my-4 dark:text-white'>Task Management <br /> Made Delightfully Simple</h2>
                    <p className='sm:text-lg text-base sm:mb-9 mb-6 dark:text-white'>Organize, prioritize, and manage tasks with a high level of detail.</p>
                    <button className='text-white bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-700 sm:text-lg text-base rounded-lg px-5 py-2.5 text-center duration-200'>Signup now, it's FREE!</button>
                </div>
            </div>
        </div>
    );
};

export default Header;