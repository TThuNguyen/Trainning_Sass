import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboutMenu from './content/ab_menu/AboutMenu';
import AboutBanner from './content/ab_banner/AboutBanner';
import Footer from '../homePage/content/footer/Footer';
import Do from './content/do/Do';


AboutUs.propTypes = {

};

function AboutUs(props) {
    return (
        <Fragment>
            <AboutMenu />
            <AboutBanner />
            <Do />
            <Footer />
        </Fragment>
    );
}

export default AboutUs;