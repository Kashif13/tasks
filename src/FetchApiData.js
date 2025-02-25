import React, { useState, useEffect } from 'react';

function FetchApiData() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setLoading(false);
        });
    }, []);

    //"Loading..." message while fetching data
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{ textAlign: 'left', margin: '20px'}}>
            <h1>Fetch API Data</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchApiData;