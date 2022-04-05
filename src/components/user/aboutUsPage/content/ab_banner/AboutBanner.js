import React from 'react';
// import PropTypes from 'prop-types';

AboutBanner.propTypes = {

};

function AboutBanner(props) {
    return (
        <div className="dobanner_container">
            <div className="dobanner_content">
                <div className="dobanner_content_title">
                   What we <span className="dobanner_content_title_span1"> do</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;