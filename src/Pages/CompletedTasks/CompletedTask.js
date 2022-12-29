import React from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';

const CompletedTask = ({ completedTask, refetch }) => {

    const { taskImage, taskDetail, taskTitle } = completedTask;

    return (
        <>
            <div className="border rounded-lg shadow-md p-5 dark:bg-gray-700 dark:border-gray-600">
                <div className='flex flex-col items-center md:flex-row'>
                    <img className="object-cover md:w-52 md:h-auto w-[300px] h-[250px] rounded-t-lg sm:h-full md:rounded-none md:rounded-l-lg" src={taskImage} alt="" />
                    <div className="flex flex-col justify-between md:p-4 leading-normal md:mt-0 mt-7">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{taskTitle}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-white">{taskDetail}</p>
                        <div className='sm:flex md:pt-7 sm:pt-4 pt-3'>
                            <DeleteModal
                                title='Are you sure you want to delete this Completed Task?'
                                task={completedTask}
                                refetch={refetch}
                            />
                            <Link to='/myTask'>
                                <button className='hover:underline mr-4 font-medium text-blue-500'>Not Completed</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='md:mt-10 mt-4'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
                    <textarea
                        name='detail'
                        rows="4"
                        className="!mt-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Add Your Comment..."
                        required
                    >
                    </textarea>
                    <button className='mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-900 duration-200'>Submit</button>
                </div>
            </div>
        </>
    );
};

export default CompletedTask;