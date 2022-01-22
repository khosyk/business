import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop(isMenu) {
  let location = useLocation();
  let [locations, setLocations] = useState([]);
  useEffect(()=>{
    setLocations([...locations,location.pathname]);
    if(isMenu !== true && locations[locations.length - 2] !== locations[locations.length - 3]){
      document.documentElement.scrollTop = 0
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


export const ActiveAsideStyle =({ isActive }) => {
  return {
    fontWeight: isActive ? '800' :'',
    borderLeft: isActive ? '5px solid #d6336c' : '',
  };
}