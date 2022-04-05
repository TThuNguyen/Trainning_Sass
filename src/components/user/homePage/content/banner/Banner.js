import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = (props) => {
    const [item, setItem] = useState();
    const [enroll, setEnroll] = useState();
    const [file, setFile] = useState('');

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newItem = { ...item, [key]: value };

        setItem(newItem);
    }
    const onErollChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newEnroll = { ...enroll, [key]: value };

        setEnroll(newEnroll);
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
        axios({
            method: 'post',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/sendEmail',
            data: item,
        })
            .then((res) => {
                localStorage.setItem('email', res.data);
                alert('You have successfully Subscribe the site!!');
            })
            .catch((err) => {
                alert("Subscribe failed! please check your email");
            });
    }

    const postEnroll = (e) => {
        e.preventDefault();
        uploadImage(file).then((res) => {
            const newEnroll = { ...enroll, img: res };
            axios({
                method: 'post',
                url: 'https://fightingfishpnv22laravel.herokuapp.com/api/enroll',
                data: newEnroll,
            })
                .then((res) => {
                    localStorage.setItem('email', res.data);
                    alert('You have successfully Enroll !!');
                })
                .catch((err) => {
                    alert("Enroll failed! please check your email");
                });
        });
    };

    return (
        <div className="banner_container" id="home">
            <div className="banner_content">

                <div className="banner_content_title">
                    Welcome to <span className="banner_content_title_span1">PNV</span>
                </div>
                <div className="banner_content_info">
                    Passerelles numériques Vietnam is a French NGO established in 2010.
                </div>
                <div className="banner_content_subcribe">
                    <input className="banner_input form-control" onChange={onChange} type="email" name="txtEmail" placeholder="Email"></input>
                    <input type="button" className="banner_button_subcribe" onClick={post} value="Subscribe"></input>
                </div>
                <div className="banner_button">
                    <input type="button" className="banner_button_enroll" value="Enrollment" data-bs-toggle="modal" data-bs-target="#banner_model"></input>

                    <a
                        href="https://youtu.be/WUOxMDu-9zM"
                        className="glightbox banner_button_watch"
                    >
                        <i className='bx bx-caret-right-circle'></i>
                        <div>Watch Video</div>
                    </a>
                </div>
                <div className="modal fade" id="banner_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Fill in enrollment information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" name="name" onChange={onErollChange} required className="form-control mb-2" placeholder="Name" />
                                <input type="text" name="phone" onChange={onErollChange} required className="form-control mb-2" placeholder="Phone" />
                                <input type="text" name="school" onChange={onErollChange} required className="form-control mb-2" placeholder="School" />
                                <input type="text" name="email" onChange={onErollChange} required className="form-control mb-2" placeholder="Email" />
                                <input type="text" name="address" onChange={onErollChange} required className="form-control mb-2" placeholder="Address" />
                                <input type="text" name="circumstance" onChange={onErollChange} required className="form-control mb-2" placeholder="Circumstance" />
                                <input type="file" name="img" onChange={onChangeImg} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={postEnroll} data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;