import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';
import Login from '../Components/Home/Login.jsx/Login';
import Registration from '../Components/Home/Registration/Registration';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
        ]
    }
])

export default router