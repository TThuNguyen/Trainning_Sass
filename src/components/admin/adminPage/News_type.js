import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News_type = (props) => {
    const [item, setItem] = useState({ type: '' });
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newItem = { ...item, [key]: value };

        setItem(newItem);
    }

    const post = (e) => {
        axios({
            method: 'post',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type',
            data: item,
        })
            .then((res) => {
                if (res.data.status == 200) {
                    setResults(res.data.results);
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const showUpdate = (item) => {
        setItem(item);
    }

    const update = (e) => {
        axios({
            method: 'put',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type/' + item.id,
            data: item,
        })
            .then((res) => {

                console.log(item);
                if (res.data.status == 200) {
                    setResults(res.data.results);
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }

    const del = (id) => {
        axios({
            method: 'delete',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type/' + id,
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
        <div>
            <button data-bs-toggle="modal" data-bs-target="#addNewsType">Add news type</button>
            <div className="modal fade" id="addNewsType" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add news type</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="type" className="form-control mb-2" onChange={onChange} placeholder="Enter news type" />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={post} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>

                    </div>
                </div>
            </div>
            <table className="admin_table">
                <thead><tr className="admin_table_header">
                    <th>No.</th>
                    <th>Type</th>
                    <th>Fix</th>
                </tr></thead>
                <tbody>
                    {results.map((result, index) => {
                        return <tr key={index}>
                            <td>{i++}</td>
                            <td>{result.type}</td>
                            <td><button data-bs-toggle="modal" data-bs-target="#updateNewsType" onClick={() => showUpdate(result)}>update</button>
                                <button onClick={() => del(result.id)}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="updateNewsType" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update gallery type</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="type" className="form-control mb-2" defaultValue={item.type} onChange={onChange} placeholder="Enter news type" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={update} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News_type;