import React from 'react';
// import PropTypes from 'prop-types';

ReportBanner.propTypes = {

};

function ReportBanner(props) {
    return (
        <div className="dobanner_container">
            <div className="dobanner_content">
                <div className="dobanner_content_title">
                   Annual <span className="dobanner_content_title_span1"> Report</span>
                </div>
            </div>
        </div>
    );
}

export default ReportBanner;