import React from 'react';
import {Link} from 'react-router-dom';

export default function Aside({setAsideMenu}) {
  
  return(
    <aside id='aside'>
      <button onClick={setAsideMenu(false)}>X</button>
          <ul className="gnb">
            <li>
              <Link 
              className='gnbLink' to="/members"
              >
                MEMBERS
              </Link>
            </li>
            <li>
              <Link 
              className='gnbLink' to="/youtube">
                YOUTUBE
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/gallery">
                GALLERY
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/community">
              COMMUINITY
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/membership">
                MEMBERSHIP
              </Link>
            </li>
            </ul>
    </aside>
  )
}