import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const DeleteModal = ({ task, refetch, title }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleDeleteTask = (id) => {

        fetch(`http://localhost:5000/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task deleted successfully');
                    setIsOpen(false);
                    refetch();
                }
            })
    }

    return (
        <>
            <button onClick={openModal} className='hover:underline mr-4 font-medium text-red-500'>Delete</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <p className='font-medium mb-12 mt-4 text-lg'>{title}</p>
                <div className='flex justify-end'>
                    <button onClick={() => handleDeleteTask(task?._id)} className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>Yes, I'm sure</button>
                    <button onClick={closeModal} className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'>No, Cancel</button>
                </div>
            </Modal>
        </>
    );
};

export default DeleteModal;