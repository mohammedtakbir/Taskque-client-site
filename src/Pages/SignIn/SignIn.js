import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../ReduxAuth/ReduxAuth';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';


const googleProvider = new GoogleAuthProvider()

const SignIn = () => {
    const dispatch = useDispatch();
    const { userSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(res => {
                setLoading(false);
                navigate(from);
                setError('');
                form.reset();
                toast.success('Sign In Successfully!')
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }

    const handleGoogleSingIn = () => {
        setGoogleLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(res => {
                dispatch(setActiveUser({
                    userName: res.user.displayName,
                    userEmail: res.user.email
                }))
                navigate(from);
                setGoogleLoading(false);
                setError('');
                toast.success('Sign In Successfully!')
            })
            .catch(err => {
                setGoogleLoading(false);
                setError(err.message)
            })
    }

    return (
        <>
            <section className='lg:py-[150px] md:py-[70px] py-[50px] flex justify-center dark:bg-gray-800'>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7 sm:mx-0 mx-3 dark:border-gray-700 dark:bg-gray-700">
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <h5 className="text-xl font-medium text-gray-900 text-center dark:text-white">Sign In</h5>
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
                        <button
                            type="button"
                            className='text-blue-500 text-sm hover:underline !mt-0'>
                            Forgot Password
                        </button>
                        <p className='text-xs text-red-500 !mt-1'>{error}</p>
                        <button
                            type="submit"
                            className="!mt-4 w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 dark:bg-gray-800 dark:hover:bg-gray-900">{loading ? 'Loading...' : 'Sign In'}</button>
                        <div className="text-sm text-gray-500 !mt-3 text-center dark:text-white">
                            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Create new account</Link>
                        </div>
                    </form>
                    <div>
                        <p className='text-center my-3 font-semibold text-sm dark:text-white'>OR</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={handleGoogleSingIn} type="button" className="border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 duration-200 hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-900">
                            <svg
                                className="mr-2 -ml-1 w-4 h-4"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"><path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            {googleLoading ? 'Loading...' : 'LOGIN IN WITH GOOGLE'}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;