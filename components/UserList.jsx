import React from 'react';


const UserList = ({ users }) => (
    <ul>
        {users.map((item, index) => <li key={index}>{item.users}</li>)}
    </ul>
);


export default UserList;