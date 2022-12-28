import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import AddTask from "../Pages/AddTask/AddTask";

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
                path: '/add-task',
                element: <AddTask />
            },
        ],
    }
])