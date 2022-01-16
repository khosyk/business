import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import CommunityContainer from "../Container/CommunityContainer";
import ContactContainer from "../Container/ContactContainer";
import GalleryContainer from "../Container/GalleryContainer";
import MembersContainer from '../Container/MembersContainer';
import YoutubeContainer from "../Container/YoutubeContainer";
import MainContainer from "../Container/MainContainer";
import MembershipContainer from '../Container/MembershipContainer';
import Footer from './Footer';
import Header from './Header';

export default function Routers() {
    
  
    return (
        <HashRouter>
            <Header />
            <Routes>
                    <Route path='/' element={<MainContainer />} />
                    <Route path='/community' element={<CommunityContainer />} />
                    <Route path='/members' element={<MembersContainer />} />
                    <Route path='/contact' element={<ContactContainer />} />
                    <Route path='/gallery' element={<GalleryContainer />} />
                    <Route path='/youtube' element={<YoutubeContainer />} />
                    <Route path='/membership' element={<MembershipContainer />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
};

