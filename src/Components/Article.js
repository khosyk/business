import React from 'react';

export default function Article({name,num, first, second, third, fourth}){
    return(
        <>
            <div className={name}>
                <div className='wrap'>
                <div className='number'>{num}
                
                <div className='numberCover'>
                ■
                </div>
                </div>
                <span>{first}</span>
                <h2>{second}</h2>
                <p className='p1'>
                    {third}
                </p>
                <p className='p2'>
                    {fourth}
                </p>
                </div>
            </div>
        </>
    );
}