import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setListOfUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <ul>
                {listOfUsers.map((user) => (
                    <li key={user.id} className="mb-2">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
