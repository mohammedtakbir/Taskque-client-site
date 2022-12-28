import React from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';

const MyTask = ({ myTask, refetch }) => {
    const { taskImage, taskDetail, taskTitle, _id } = myTask;

    return (
        <>
            <div href="#" className="border rounded-lg shadow-md p-5">
                <div className='flex flex-col items-center md:flex-row'>
                    <img className="object-cover sm:w-full w-[200px] rounded-t-lg sm:h-full h-[200px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={taskImage} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{taskTitle}</h5>
                        <p className="mb-3 font-normal text-gray-700">{taskDetail}</p>
                    </div>
                </div>
                <div className='sm:flex pt-7'>
                    <Link to={`/taskUpdate/${_id}`}>
                        <button className='underline mr-4 font-medium text-blue-500'>Update</button>
                    </Link>
                    <DeleteModal myTask={myTask} refetch={refetch} />
                    <button className='underline mr-4 font-medium text-green-500'>Completed</button>
                </div>
            </div>

        </>
    );
};

export default MyTask;