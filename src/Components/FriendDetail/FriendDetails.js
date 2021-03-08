import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} =useParams();
    const[friend, setFriend]  =useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    }, [])
    return (
        <div>
            <p>This is friend detail componenets: {friendId}</p>
            <h3>Name; {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;