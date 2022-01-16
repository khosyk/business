import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  let location = useLocation();
  let [locations, setLocations] = useState([]);
  useEffect(()=>{
    setLocations([...locations,location.pathname]);
    if(locations[locations.length - 2] !== locations[locations.length - 3]){
      window.scrollTo(0,0);
    }
    return ()=>setLocations();
  },[location]);
}

export const ActiveStyle =({ isActive }) => {
  return {
    fontWeight: isActive ? '800' :''
  };
}

export const ClickToTop = () =>{
  document.documentElement.scrollTop = 0
}