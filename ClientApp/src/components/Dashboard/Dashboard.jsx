import React, { useEffect, useState } from 'react';

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        return fetch('api/user').then((resp) => {
            if (resp.ok) {
                return resp
            }
        })
            .then((response) => response.json())
            .then(({ data }) => setData(data))
            .catch((err) => console.log(err));
            
    }, [])
    if (data.length) {

    return (
        <div>
            <h1>
                {data.map((user) => (
                    user.fullname
                ))
                }
            </h1>
        </div>
        )
    }
    return "Loading..."
}

export default Dashboard;