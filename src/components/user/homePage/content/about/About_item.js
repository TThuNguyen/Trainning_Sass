import React from 'react';
import PropTypes from 'prop-types';

About_item.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    content: PropTypes.string,
};

About_item.defaultProps = {
    title: '',
    icon: '',
    content: '',
}

function About_item(props) {
    const { title, icon, content } = props;
    return (
        <div className="about_item">
            <div className="about_item_icon"><i className={icon}></i></div>
            <div className="about_sub_box">
                <div className="about_sub_title">{title}</div>
                <div className="about_sub_content">{content}</div>
            </div>
        </div>
    );
}

export default About_item;