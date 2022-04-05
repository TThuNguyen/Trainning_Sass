import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboutMenu from './content/ab_menu/AboutMenu';
import ReportBanner from './content/ab_banner/ReportBanner';
import Footer from '../homePage/content/footer/Footer';

import Report from './content/report/Report';


AboutReport.propTypes = {

};

function AboutReport(props) {
    return (
        <Fragment>
            <AboutMenu />
            <ReportBanner />
            <Report />
            <Footer />
        </Fragment>
    );
}

export default AboutReport;