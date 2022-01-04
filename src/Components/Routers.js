import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityContainer from "../Container/CommunityContainer";
import ContactContainer from "../Container/ContactContainer";
import GalleryContainer from "../Container/GalleryContainer";
import MembersContainer from '../Container/MembersContainer';
import YoutubeContainer from "../Container/YoutubeContainer";
import MainContainer from "../Container/MainContainer";
import Footer from './Footer';
import Header from './Header';


export default function Routers(){

    return(
        <BrowserRouter>
            <Header/>
        <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='/community' element={<CommunityContainer/>}/>
            <Route path='/members' element={<MembersContainer/>}/>
            <Route path='/contact' element={<ContactContainer/>}/>
            <Route path='/gallery' element={<GalleryContainer/>}/>
            <Route path='/youtube' element={<YoutubeContainer/>}/>
        </Routes>
            <Footer/>
        </BrowserRouter>
    )
};