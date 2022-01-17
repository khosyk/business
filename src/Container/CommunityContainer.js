import React,{ useEffect, useState } from 'react';
import axios from "axios";
import Community from '../Presenter/Community';

export default function CommunityContainer() {
    
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/community.json`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                setPosts(json.data.data);
            })
    }, []);

    return(
        <Community posts={posts}/>
    )
}