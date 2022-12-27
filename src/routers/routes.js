import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../Pages/Shared/Register/Register";
import SignIn from "../Pages/Shared/SignIn/SignIn";

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
        ],
    }
])