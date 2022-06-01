import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../components/pages/Home";
import Playlists from "../components/pages/Playlists";
import AboutUs from "../components/pages/AboutUs";
import ErrorPage from "../components/pages/ErrorPage"

const Router = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route exact path="/playlists" element={<Playlists/>}/>
                <Route exact path="/aboutus" element={<AboutUs/>}/>
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default Router
