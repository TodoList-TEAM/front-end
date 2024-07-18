import { Outlet } from "react-router-dom"
import {Header} from '../components/Header';
import {Footer} from '../components/Footer'


function RootLayout_after(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


function RootLayout_before(){
    return(
        <>
            <Outlet />
        </>
    )
}


export {RootLayout_after, RootLayout_before}