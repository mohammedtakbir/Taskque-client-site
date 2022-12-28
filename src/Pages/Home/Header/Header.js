import React from 'react';

const Header = () => {
    return (
        <div className='h-[90vh] flex items-center bg-[#EFF3F6]'>
            <div className='container mx-auto text-center'>
                <span className='bg-gray-700 text-white text-[11px] py-1 px-3 rounded-2xl font-medium'>TASK MANAGEMENT</span>
                <h2 className='text-5xl font-light leading-tight my-4'>Task Management <br /> Made Delightfully Simple</h2>
                <p className='text-lg mb-9'>Organize, prioritize, and manage tasks with a high level of detail.</p>
                <button className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-700 text-lg rounded-lg px-5 py-2.5 text-center duration-200'>Signup now, it's FREE!</button>
            </div>
        </div>
    );
};

export default Header;