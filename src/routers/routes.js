import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import AddTask from "../Pages/AddTask/AddTask";
import MyTask from "../Pages/MyTask/MyTasks";
import TaskUpdate from "../Pages/TaskUpdate/TaskUpdate";
import CompletedTasks from "../Pages/CompletedTasks/CompletedTasks";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: '/myTask',
                element: <PrivateRoute><MyTask /></PrivateRoute>
            },
            {
                path: '/taskUpdate/:id',
                element: <TaskUpdate />
            },
            {
                path: '/completedTasks',
                element: <PrivateRoute><CompletedTasks /></PrivateRoute>
            },
        ],
    }
])