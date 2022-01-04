import React from 'react';
import Loading from '../images/loading.gif';

export default function Loader(){


    return(
        <>
        <div id='loader'>
        <img  src={Loading} alt='loading'/>
        </div>
        </>
    )
};