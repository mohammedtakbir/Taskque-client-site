import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';

const MyTask = ({ myTask, refetch }) => {
    const { taskImage, taskDetail, taskTitle, _id } = myTask;
    const [completed, setCompleted] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCompletedTask = (id) => {
        fetch(`http://localhost:5000/completedTask?status=completed&id=${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    setIsCompleted(!false);
                    navigate('/completedTasks')
                    toast.success('Task Completed!')
                }
            })
    };

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/completedTask/${_id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setCompleted(data.completedStatus);
            })
            .catch(err => setLoading(false))

    }, [_id, isCompleted])

    return (
        <>
            <div href="#" className="border rounded-lg shadow-md p-5 dark:bg-gray-700 dark:border-gray-600">
                <div className='flex flex-col items-center md:flex-row'>
                    <img className="object-cover sm:w-full w-[200px] rounded-t-lg sm:h-full h-[200px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={taskImage} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{taskTitle}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-white">{taskDetail}</p>
                        <div className='sm:flex pt-7'>
                            <Link to={`/taskUpdate/${_id}`}>
                                <button className='hover:underline mr-4 font-medium text-blue-500'>Update</button>
                            </Link>
                            <DeleteModal
                                title='Are you sure you want to delete this Task?'
                                task={myTask}
                                refetch={refetch}
                            />
                            {loading ||
                                <button
                                    disabled={completed && true}
                                    onClick={() => handleCompletedTask(_id)}
                                    className={`${completed && 'disabled:cursor-not-allowed hover:no-underline !text-gray-600 dark:!text-[#c0c0c0]'} hover:underline mr-4 font-medium text-green-500`}
                                >
                                    {completed ? 'Completed' : 'Complete'}
                                </button>}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default MyTask;