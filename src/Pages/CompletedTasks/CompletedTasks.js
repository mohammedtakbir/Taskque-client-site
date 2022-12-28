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
        queryFn: () => fetch(`http://localhost:5000/completedTasks?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }

    console.log(completedTasks)

    return (
        <div className='max-w-[1200px] mx-auto py-10'>
            <h2 className='text-center text-3xl font-semibold mb-10'>All My Completed Tasks</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    completedTasks.map(completedTask => <CompletedTask
                        key={completedTask._id}
                        completedTask={completedTask}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default CompletedTasks;