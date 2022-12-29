import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { userRegister } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userRegister(email, password)
            .then(res => {
                navigate('/')
                setError('')
                form.reset();
                toast.success('Signup successfully!')
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className='dark:bg-gray-800'>
            <section className='lg:py-[200px] md:py-[70px] py-[50px] flex justify-center'>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7 sm:mx-0 mx-3 dark:bg-gray-700 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <h5 className="text-xl font-medium text-gray-900 text-center dark:text-white">Create an Account!</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                placeholder='Insert Your Email'
                                type="email"
                                name='email'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                placeholder='Insert Your Password'
                                type="password"
                                name='password'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <p className='text-xs text-red-500 !mt-1'>{error}</p>
                        <button
                            type="submit"
                            className="!mt-5 w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 duration-200">{'Register'}</button>
                        <div className="text-sm text-gray-500 !mt-3 text-center dark:text-white">
                            Already have an account? <Link to="/signIn" className="text-blue-500 hover:underline">Sign In</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;