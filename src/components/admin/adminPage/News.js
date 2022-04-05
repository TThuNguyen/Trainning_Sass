import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News(props) {
    const [item, setItem] = useState({ title: '', shortContent: '', content: '', news_type_id: '' });
    const [results, setResults] = useState([]);
    const [types, setTypes] = useState([]);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newItem = { ...item, [key]: value };

        setItem(newItem);
    }
    const onChangeImg = (e) => {
        setFile(e.target.files[0]);
    }

    const uploadImage = (img) => {
        const body = new FormData();
        body.append('key', '84969e46479194605dee705296fc7686');
        body.append('image', img);
        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body,
            headers: {
                'content-type': 'multipart/form-data',
            }
        }).then((res) => {
            return res.data.data.display_url;
        }).catch(() => false);
    };

    const post = (e) => {
        e.preventDefault();
        uploadImage(file).then((res) => {
            const newItem = { ...item, img: res };
            console.log(newItem);
            axios({
                method: 'post',
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news',
                data: newItem,
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
        });
    };

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const getType = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type',
        })
            .then((res) => {
                setTypes(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const showUpdate = (item) => {
        setItem(item);
    }

    const update = (e) => {
        e.preventDefault();
        if (file != '') {
            uploadImage(file).then((res) => {
                const newItem = { ...item, img: res };
                axios({
                    method: 'put',
                    url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news/' + item.id,
                    data: newItem,
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
            });
        } else {
            axios({
                method: 'put',
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news/' + item.id,
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
        }
    }

    const del = (id) => {
        axios({
            method: 'delete',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news/' + id,
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
        getType();
    }, [])

    let i = 1;
    return (
        <div>
            <button data-bs-toggle="modal" data-bs-target="#addNews">Add news</button>
            <div className="modal fade" id="addNews" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add news</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="title" className="form-control mb-2" onChange={onChange} placeholder="Enter news title" />
                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <input type="text" name="shortContent" className="form-control mb-2" onChange={onChange} placeholder="Enter news short content " />
                            <select name="news_type_id" id="#" onChange={onChange} className="mb-2">
                                <option value=""></option>
                                {
                                    types.map((type, index) => {
                                        return <option key={index} value={type.id}>{type.type}</option>
                                    })
                                }
                            </select>
                            <textarea rows={10} type="content" name="content" className="form-control" onChange={onChange} placeholder="Enter news content" />
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
                    <th>Title</th>
                    <th>Image</th>
                    <th>Fix</th>
                </tr></thead>
                <tbody>
                    {results.map((result, index) => {
                        return <tr key={index}>
                            <td>{i++}</td>
                            <td>{result.type}</td>
                            <td>{result.title}</td>
                            <td><img className="ad_table_img" src={result.img}></img></td>
                            <td><button data-bs-toggle="modal" data-bs-target="#updateNews" onClick={() => showUpdate(result)}>update</button>
                                <button onClick={() => del(result.id)}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="updateNews" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update news</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="title" className="form-control mb-2" defaultValue={item.title} onChange={onChange} placeholder="Enter news title" />
                            <img className="ad_table_img mb-2" src={item.img}></img>

                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <input type="text" name="shortContent" className="form-control mb-2" defaultValue={item.shortContent} onChange={onChange} placeholder="Enter news short content " />
                            <select name="news_type_id" id="#" defaultValue={item.news_type_id} onChange={onChange} className="mb-2">
                                <option value=""></option>
                                {
                                    types.map((type, index) => {
                                        return <option key={index} value={type.id}>{type.type}</option>
                                    })
                                }
                            </select>
                            <textarea rows={10} type="content" name="content" className="form-control" defaultValue={item.content} onChange={onChange} placeholder="Enter news content" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={update} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;