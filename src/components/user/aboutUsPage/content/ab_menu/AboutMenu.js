import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

AboutMenu.propTypes = {

};

function AboutMenu(props) {

  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo"><img src="assets/img/logo/logo-vi.png" alt="" /></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/aboutUs" className="nav-link scrollto active" >What we do</Link></li>
              <li><Link to="/staff" className="nav-link scrollto" >Our staff</Link></li>
              <li><Link to="/finance" className="nav-link scrollto" >Financial Information</Link></li>
              <li><Link to="/report" className="nav-link scrollto">Annual Report</Link></li>
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
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              aaaaaaaa
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </Fragment>
  );
}

export default AboutMenu;