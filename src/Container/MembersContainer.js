import React from 'react';
import Members from '../Presenter/Members';

import Profile1 from '../images/p1.jpg';
import Profile2 from '../images/p2.jpg';
import Profile3 from '../images/p3.jpg';
import Profile4 from '../images/p4.jpg';
import Profile5 from '../images/p5.jpg';
import Profile6 from '../images/p6.jpg';


export default function MembersContainer() {

    const members = [{
        name: 'HANSEN',
        title: 'COFOUNDER',
        src: `${Profile1}`
    },
    {
        name: 'SUJI',
        title: 'COFOUNDER',
        src: `${Profile2}`
    },
    {
        name: 'PHAN',
        title: 'MANAGER',
        src: `${Profile3}`
    },
    {
        name: 'CHRIST',
        title: 'MANAGER',
        src: `${Profile4}`
    },
    {
        name: 'KATLIN',
        title: 'MANAGER',
        src: `${Profile5}`
    },
    {
        name: 'ROSA',
        title: 'MANAGER',
        src: `${Profile6}`
    },

    ]
    
    return (
        <Members members={members}/>
    )
}