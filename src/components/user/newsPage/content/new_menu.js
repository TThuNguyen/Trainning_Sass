import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const New_Menu = (props) => {
  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo"> <img src="assets/img/logo/logo-vi.png" alt="" /></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hotnews">Hot news</a></li>
              <li><a className="nav-link scrollto" href="#difficulties">Difficulties</a></li>
              <li><a className="nav-link scrollto" href="#benefactors">Benefactors</a></li>
              <li><button data-hover="clickme">Donation</button></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </Fragment>
  );
}

export default New_Menu;