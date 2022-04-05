import React from 'react';
import PropTypes from 'prop-types';

loader.propTypes = {

};

function loader(props) {
    return (
        <div className="loader_bg">
            <div className="loader_title"> Welcome to <span>PNV</span></div>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
}

export default loader;