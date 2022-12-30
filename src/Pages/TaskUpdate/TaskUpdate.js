import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const TaskUpdate = () => {
    const id = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { data: task = {}, isLoading } = useQuery({
        queryKey: ['task', id.id],
        queryFn: () => fetch(`https://taskque-red.vercel.app/task/${id.id}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }
    const { taskDetail, taskTitle, _id } = task;

    const handleUpdateTask = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const detail = form.detail.value;

        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const updatedTask = {
                    taskTitle: title,
                    taskDetail: detail,
                    taskImage: imageData.data.display_url
                }

                fetch(`https://taskque-red.vercel.app/updatedTask/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedTask)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            toast.success('Your Task Updated!');
                            setLoading(false);
                            navigate('/myTask');
                        }
                    })
                    .catch(err => setLoading(false))
            })
    }

    return (
        <div className='dark:bg-gray-800'>
            <div className='max-w-[1200px] mx-auto pt-10 pb-20'>
                <section className='lg:py-[50px] md:py-[30px] py-[10px] flex justify-center'>
                    <div className="!px-4 w-full max-w-[400px] bg-white rounded-lg border border-gray-200 shadow-md p-7 sm:mx-0 mx-3 dark:bg-gray-700 dark:border-gray-600">
                        <form className="space-y-6" onSubmit={handleUpdateTask}>
                            <h5 className="text-2xl font-medium text-gray-900 text-center dark:text-white">Update Your Task!</h5>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input
                                    defaultValue={taskTitle}
                                    placeholder='Task Title'
                                    type="text"
                                    name='title'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <input
                                    // defaultValue={taskImage}
                                    type="file"
                                    name='image'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                                <textarea
                                    defaultValue={taskDetail}
                                    name='detail'
                                    rows="4"
                                    className="!mt-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Task Details..."
                                    required
                                >
                                </textarea>
                            </div>
                            <button
                                disabled={loading && true}
                                type="submit"
                                className="!mt-4 w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 duration-200">
                                {loading ? 'Updating...' : 'Update'}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TaskUpdate;