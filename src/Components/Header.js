import React from 'react';
import '../Styles/App.css';
import { NavLink } from 'react-router-dom';

// icons
import Logo from '../images/dcode.png'
import { FcMenu } from 'react-icons/fc';
import { ActiveStyle, ScrollToTop } from './Functions';



export default function Header() {

  ScrollToTop();
    return (
        <>
        <header>
        <NavMain/>
        </header>
        </>
    )
};

const NavMain = () => {

  return (
    <>
      <div className="inner">
        <NavLink  to="/" >
          <div className='logo'>
            <img src={Logo}alt='dcodelab logo' />
            <h1>
              DCODELAB
            </h1>
          </div>
        </NavLink>
        <nav className="menu">
          <ul className="gnb">
            <li>
              <NavLink 
              style={ActiveStyle}
              className='gnbLink' to="/members"
              >
                MEMBERS
              </NavLink>
            </li>
            <li>
              <NavLink 
              style={ActiveStyle}
              className='gnbLink' to="/youtube">
                YOUTUBE
              </NavLink>
            </li>
            <li>
              <NavLink 
              style={ActiveStyle}className='gnbLink' to="/gallery">
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink 
              style={ActiveStyle}className='gnbLink' to="/community">
              COMMUINITY
              </NavLink>
            </li>
            <li>
              <NavLink 
              style={ActiveStyle}className='gnbLink' to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink 
              style={ActiveStyle}className='gnbLink' to="/membership">
                MEMBERSHIP
              </NavLink>
            </li>
            <li>
              <div className="btnMenu">
                <NavLink to="menu" >
                  <FcMenu />
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

}