import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/navbar/Navbar'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {
    return (
        <>
            <Header />
            <ToastContainer/>
            {/* <Container> */}
                <Outlet />
            {/* </Container> */}
        </>
    )
}
