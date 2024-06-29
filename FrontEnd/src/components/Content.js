import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Content = ({ section }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001${section}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, [section]);

    return (
        <div className="content">
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Content;
