import React from 'react';
// import PropTypes from 'prop-types';

StaffBanner.propTypes = {

};

function StaffBanner(props) {
    return (
        <div className="dobanner_container">
            <div className="dobanner_content">
                <div className="dobanner_content_title">
                   Our  <span className="dobanner_content_title_span1"> Staff</span>
                </div>
            </div>
        </div>
    );
}

export default StaffBanner;