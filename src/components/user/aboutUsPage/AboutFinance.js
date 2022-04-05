import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboutMenu from './content/ab_menu/AboutMenu';
import FinanceBanner from './content/ab_banner/FinanceBanner';
import Footer from '../homePage/content/footer/Footer';

import Finance from './content/finance/Finance';


AboutFinance.propTypes = {

};

function AboutFinance(props) {
    return (
        <Fragment>
            <AboutMenu />
            <FinanceBanner />
            <Finance/>
            <Footer />
        </Fragment>
    );
}

export default AboutFinance;