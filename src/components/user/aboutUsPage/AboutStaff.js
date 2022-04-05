import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboutMenu from './content/ab_menu/AboutMenu';
import StaffBanner from './content/ab_banner/StaffBanner';
import Footer from '../homePage/content/footer/Footer';

import Staff from './content/staff/Staff';


AboutStaff.propTypes = {

};

function AboutStaff(props) {
    return (
        <Fragment>
            <AboutMenu />
            <StaffBanner />
            <Staff />
            <Footer />
        </Fragment>
    );
}

export default AboutStaff;