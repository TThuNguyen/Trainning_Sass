import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Achievement = (props) => {
    const [item, setItem] = useState('');
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
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/achievement',
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
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/achievement',
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
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/class',
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
                    url: 'https://fightingfishpnv22laravel.herokuapp.com/api/achievement/' + item.id,
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
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/achievement/' + item.id,
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
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/achievement/' + id,
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
            <button data-bs-toggle="modal" data-bs-target="#addAchievement">Add achievement</button>
            <div className="modal fade" id="addAchievement" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add achievement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="authorName" className="form-control mb-2" onChange={onChange} placeholder="Enter author name" />
                            <input type="text" name="topic" className="form-control mb-2" onChange={onChange} placeholder="Enter the topic" />
                            <input type="text" name="technology" className="form-control mb-2" onChange={onChange} placeholder="Enter the technology" />
                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <input type="text" name="link" className="form-control mb-2" onChange={onChange} placeholder="Enter the link " />
                            <input type="text" name="shortContent" className="form-control mb-2" onChange={onChange} placeholder="Enter the short content " />
                            <select name="classes_id" id="#" onChange={onChange} className="mb-2">
                                <option value=""></option>
                                {
                                    types.map((type, index) => {
                                        return <option key={index} value={type.id}>{type.name}</option>
                                    })
                                }
                            </select>
                            <textarea rows={10} type="content" name="content" className="form-control" onChange={onChange} placeholder="Enter the content" />
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
                    <th>Class</th>
                    <th>Author</th>
                    <th>Topic</th>
                    <th>Technology</th>
                    <th>Image</th>
                    <th>Link</th>
                    <th>Fix</th>
                </tr></thead>
                <tbody>
                    {results.map((result, index) => {
                        return <tr key={index}>
                            <td>{i++}</td>
                            <td>{result.name}</td>
                            <td>{result.authorName}</td>
                            <td>{result.topic}</td>
                            <td>{result.technology}</td>
                            <td><img className="ad_table_img" src={result.img}></img></td>
                            <td><a src={result.link}>{result.link}</a></td>
                            <td><button data-bs-toggle="modal" data-bs-target="#updateAchievement" onClick={() => showUpdate(result)}>update</button>
                                <button onClick={() => del(result.id)}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="updateAchievement" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update achievement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input type="text" name="authorName" className="form-control mb-2" defaultValue={item.authorName} onChange={onChange} placeholder="Enter author name" />
                            <input type="text" name="topic" className="form-control mb-2" defaultValue={item.topic} onChange={onChange} placeholder="Enter the topic" />
                            <input type="text" name="technology" className="form-control mb-2" defaultValue={item.technology} onChange={onChange} placeholder="Enter the technology" />
                            <img className="ad_table_img mb-2" src={item.img}></img>
                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <input type="text" name="link" className="form-control mb-2" defaultValue={item.link} onChange={onChange} placeholder="Enter the link " />
                            <input type="text" name="shortContent" className="form-control mb-2" defaultValue={item.shortContent} onChange={onChange} placeholder="Enter the short content " />
                            <select name="classes_id" defaultValue={item.classes_id} id="#" onChange={onChange} className="mb-2">
                                <option value=""></option>
                                {
                                    types.map((type, index) => {
                                        return <option key={index} value={type.id}>{type.name}</option>
                                    })
                                }
                            </select>
                            <textarea rows={10} type="content" name="content" defaultValue={item.content} className="form-control" onChange={onChange} placeholder="Enter the content" />
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

export default Achievement;