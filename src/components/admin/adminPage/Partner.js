import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Partner = (props) => {
    const [partner, setPartner] = useState({ name: '', link: '', content: '' });
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newPartner = { ...partner, [key]: value };

        setPartner(newPartner);
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
            const newPartner = { ...partner, img: res };
            axios({
                method: 'post',
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner',
                data: newPartner,
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
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const showUpdate = (partner) => {
        setPartner(partner);
    }

    const update = (e) => {
        e.preventDefault();
        if (file != '') {
            uploadImage(file).then((res) => {
                const newPartner = { ...partner, img: res };
                axios({
                    method: 'put',
                    url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner/' + partner.id,
                    data: newPartner,
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
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner/' + partner.id,
                data: partner,
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
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner/' + id,
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
        <div className="admin_tab_box">
            <button data-bs-toggle="modal" data-bs-target="#addModel">Add partner</button>
            <div className="modal fade" id="addModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add partner</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="name" className="form-control mb-2" onChange={onChange} placeholder="Enter partner name" />
                            <input type="text" name="link" className="form-control mb-2" onChange={onChange} placeholder="Enter partner link " />
                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <textarea rows={10} type="text" name="content" className="form-control" onChange={onChange} placeholder="Enter partner content" />
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
                    <th>Name</th>
                    <th>Link</th>
                    <th>Image</th>
                    <th>Fix</th>
                </tr></thead>
                <tbody>
                    {results.map((result, index) => {
                        return <tr key={index}>
                            <td>{i++}</td>
                            <td>{result.name}</td>
                            <td><a href={result.link}>{result.link}</a></td>
                            <td><img className="ad_table_img" src={result.img}></img></td>
                            <td><button data-bs-toggle="modal" data-bs-target="#updateModel" onClick={() => showUpdate(result)}>update</button>
                                <button onClick={() => del(result.id)}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="updateModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update partner</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="name" className="form-control mb-2" defaultValue={partner.name} onChange={onChange} placeholder="Enter partner name" />
                            <input type="text" name="link" className="form-control mb-2" defaultValue={partner.link} onChange={onChange} placeholder="Enter partner link " />
                            <img className="ad_table_img mb-2" src={partner.img}></img>
                            <input type="file" name="img" className="form-control mb-2" onChange={onChangeImg} />
                            <textarea rows={10} type="text" name="content" className="form-control" defaultValue={partner.content} onChange={onChange} placeholder="Enter partner content" />
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

export default Partner;