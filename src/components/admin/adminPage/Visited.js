import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Visited = (props) => {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/user',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const del = (id) => {
        axios({
            method: 'delete',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/user/' + id,
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    let i = 1;
    return (
        <table className="admin_table">
            <thead><tr className="admin_table_header">
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Created at</th>
                <th>Fix</th>
            </tr></thead>
            <tbody>
                {results.map((result, index) => {
                    return <tr key={index}>
                        <td>{i++}</td>
                        <td>{result.name}</td>
                        <td>{result.email}</td>
                        <td>{result.phone}</td>
                        <td>{result.address}</td>
                        <td>{result.created_at}</td>
                        <td><button onClick={() => del(result.id)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Visited;