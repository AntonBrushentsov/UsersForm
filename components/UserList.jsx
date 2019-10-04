import React from 'react';


const UserList = ({ users }) => (
    <ul>
        {users.map((item, index) => <li key={index}>{item.firstName}, {item.secondName}</li>)}
    </ul>
);


export default UserList;