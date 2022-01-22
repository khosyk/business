import React, { useState } from 'react';
import '../Styles/App.css';
import { Link, NavLink } from 'react-router-dom';

//import functions
import { ActiveAsideStyle, ActiveStyle, ScrollToTop } from './Functions';

// img, icons
import Logo from '../images/dcode.png'
import { FcMenu } from 'react-icons/fc';
import {MdCall, MdEmail} from 'react-icons/md'


const body = document.querySelector("body");
export default function Navigation() {

  //by asideMenu change nav's visuallity 
  //isMenu for prevent scroll change when they click menu bar
  const [asideMenu, setAsideMenu] = useState(false);
  const [isMenu, setIsMenu] = useState(true);
  
  // links data
  const Links = [{
    title: 'MEMBERS',
    to: '/members'
  },
  {
    title: 'YOUTUBE',
    to: '/youtube'
  },
  {
    title: 'GALLERY',
    to: '/gallery'
  }, {
    title: 'COMMUINITY',
    to: '/community'
  }, {
    title: 'CONTACT',
    to: '/contact'
  }, {
    title: 'MEMBERSHIP',
    to: '/membership'
  },]
  // follow location to redirect;
  ScrollToTop(isMenu);
  return (
    <>
    {asideMenu ?<div className='asideBackground' onClick={() => {setAsideMenu(false);
        setIsMenu(true);    
        body.style.overflow = "auto";
        }}>
        </div> :''}
      <header>
        <NavMain asideMenu={asideMenu} setAsideMenu={setAsideMenu} setIsMenu={setIsMenu} Links={Links} />
      </header>
      {asideMenu ? <Aside asideMenu={asideMenu} setAsideMenu={setAsideMenu} setIsMenu={setIsMenu} Links={Links} /> : ''}
    </>
  )


  function NavMain({Links,setAsideMenu , setIsMenu}) {
    return (
      <>
        <div className="inner">
          <NavLink to="/" >
            <div className='logo'>
              <img src={Logo} alt='dcodelab logo' />
              <h1>
                DCODELAB
              </h1>
            </div>
          </NavLink>
          {!asideMenu ? <nav className="menu">
            <ul className="gnb">
              {Links.map((Links, index) => <li key={index}>
                <NavLink style={ActiveStyle} className='gnbLink' to={Links.to}
                onClick={()=> setIsMenu(false)}
                >
                  {Links.title}
                </NavLink>
              </li>)}
              <li>
                <FcMenu
                  onClick={() => {
                    setAsideMenu(!asideMenu)
                    setIsMenu(true)
                    body.style.overflow = "hidden";
                  }}
                  className="btnMenu" />
              </li>
            </ul>
          </nav> : ''}
        </div>
      </>
    );

  }

  function Aside({Links, setIsMenu}) {

    return (
      <>
        <aside id='aside'>
            <div className='logo'>
            <Link className='logoBtn' to="/" >
              <img src={Logo} alt='dcodelab logo' />
            </Link>
            <Link className='logoBtn' to="/">
            <h1>
                DCODELAB
              </h1>
            </Link>
            </div>
          {/* <button 
          }}>X</button> */}
          <ul>
          {Links.map((Links, index) => <li key={index}>
                <NavLink style={ActiveAsideStyle} className='gnbLink' to={Links.to}
                onClick={()=>setIsMenu(false)}>
                  {Links.title}
                </NavLink>
              </li>)}
          </ul>
          <div className='asideBottom'>
            Contact Us<br/>
            <MdCall/>123-1234<br/>
            <MdEmail/>ex@mail.com<br/>
          </div>
        </aside>
      </>
    )
  }
};
