import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import CompletedTask from './CompletedTask';

const CompletedTasks = () => {
    const { user } = useContext(AuthContext);

    const { data: completedTasks = [], isLoading, refetch } = useQuery({
        queryKey: ['completedTasks', user?.email],
        queryFn: () => fetch(`https://taskque-red.vercel.app/completedTasks?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }


    return (
        <section className={`dark:bg-gray-800 ${completedTasks.length < 3 ? 'h-[100vh]' : null}`}>
            <div className='max-w-[1200px] mx-auto pt-[70px] pb-[80px]'>
                <h2 className='text-center text-3xl font-semibold mb-10 dark:text-white'>
                    {
                        completedTasks.length < 1 ? 'No Task Completed' : 'All My Completed Tasks'
                    }
                </h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mx-2'>
                    {
                        completedTasks.map(completedTask => <CompletedTask
                            key={completedTask._id}
                            completedTask={completedTask}
                            refetch={refetch}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CompletedTasks;