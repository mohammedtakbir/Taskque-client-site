import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import MyTask from './MyTask';

const MyTasks = () => {
    const { user } = useContext(AuthContext);

    const { data: myTasks = [], isLoading } = useQuery({
        queryKey: ['myTask', user?.email],
        queryFn: () => fetch(`http://localhost:5000/myTask?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }
    console.log(myTasks)
    return (
        <div className='max-w-[1200px] mx-auto py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    myTasks.map(myTask => <MyTask
                        key={myTask._id}
                        myTask={myTask}
                    />)
                }
            </div>
        </div>
    );
};

export default MyTasks;