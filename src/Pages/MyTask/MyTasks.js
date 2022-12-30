import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import MyTask from './MyTask';

const MyTasks = () => {
    const { user } = useContext(AuthContext);

    const { data: myTasks = [], isLoading, refetch } = useQuery({
        queryKey: ['myTask', user?.email],
        queryFn: () => fetch(`https://taskque-red.vercel.app/myTask?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className={`dark:bg-gray-800 ${myTasks.length < 3 ? 'h-[100vh]' : null}`}>
            <div className='max-w-[1200px] mx-auto pt-[70px] pb-[80px]'>
                <h2 className='text-center text-3xl font-semibold mb-10 dark:text-white'>
                    {myTasks.length < 1 ? 'No Task Available' : 'All My Tasks'}
                </h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mx-2'>
                    {
                        myTasks.map(myTask => <MyTask
                            key={myTask._id}
                            myTask={myTask}
                            refetch={refetch}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTasks;