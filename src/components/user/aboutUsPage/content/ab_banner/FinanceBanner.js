import React from 'react';
// import PropTypes from 'prop-types';

FinanceBanner.propTypes = {

};

function FinanceBanner(props) {
    return (
        <div className="dobanner_container">
            <div className="dobanner_content">
                <div className="dobanner_content_title">
                  Financial <span className="dobanner_content_title_span1"> Information</span>
                </div>
            </div>
        </div>
    );
}

export default FinanceBanner;