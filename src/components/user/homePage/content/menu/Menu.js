import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = (props) => {
  const [item, setItem] = useState({ language: 'vn', bank_code: '', order_desc: '' });

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newItem = { ...item, [key]: value };

    setItem(newItem);
  }

  const post = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/vnPay',
      data: item,
    })
      .then((res) => {
        window.location = res.data;
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo"><img src="assets/img/logo/logo-vi.png" alt="" /></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#home">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#achievement">Achievement</a></li>
              <li><a className="nav-link scrollto" href="#partner">Partners</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#news">News</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <button type="button" data-bs-toggle="modal" data-bs-target="#menu_model">
            <span className="menu_btn_1">Donate</span><span className="menu_btn_2">Thank you!</span>
          </button>
        </div>
      </header>
      <div className="modal fade" id="menu_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">Donate to us</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="amount">Name</label>
                <input className="form-control" required onChange={onChange} name="name" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Email</label>
                <input className="form-control" required onChange={onChange} name="email" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Phone number</label>
                <input className="form-control" id="phone" required onChange={onChange} name="phone" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Address</label>
                <input className="form-control" id="address" required onChange={onChange} name="address" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount of money</label>
                <input className="form-control" id="amount" required onChange={onChange} name="amount" type="number" />
              </div>
              <div className="form-group">
                <label htmlFor="order_desc">Message</label>
                <textarea className="form-control" cols={20} id="order_desc" onChange={onChange} name="order_desc" rows={2} />
              </div>
              <div className="form-group">
                <label htmlFor="bank_code">Bank</label>
                <select name="bank_code" id="bank_code" onChange={onChange} className="form-control">
                  <option value="">Not selected</option>
                  <option value="NCB">NCB</option>
                  <option value="AGRIBANK">Agribank</option>
                  <option value="SCB">SCB</option>
                  <option value="SACOMBANK">SacomBank</option>
                  <option value="EXIMBANK">EximBank</option>
                  <option value="MSBANK">MSBANK</option>
                  <option value="NAMABANK">NamABank</option>
                  <option value="VNMART">VnMart e-wallet</option>
                  <option value="VIETINBANK">Vietinbank</option>
                  <option value="VIETCOMBANK">VCB</option>
                  <option value="HDBANK">HDBank</option>
                  <option value="DONGABANK">Dong A</option>
                  <option value="TPBANK">TPBank</option>
                  <option value="OJB">OceanBank</option>
                  <option value="BIDV">BIDV</option>
                  <option value="TECHCOMBANK">Techcombank</option>
                  <option value="VPBANK">VPBank</option>
                  <option value="MBBANK">MBBank</option>
                  <option value="ACB">ACB</option>
                  <option value="OCB">OCB</option>
                  <option value="IVB">IVB</option>
                  <option value="VISA">VISA/MASTER</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="language">language</label>
                <select name="language" id="language" onChange={onChange} className="form-control">
                  <option value="vn">Vietnamese</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={post}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}
    </Fragment>
  );
}

export default Menu;