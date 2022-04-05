import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Layout_homePage.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    layoutDisplay: PropTypes.string,
    link: PropTypes.string,
};

Layout_homePage.defaultProps = {
    title: '',
    id: '',
    layoutDisplay: '',
    link: '',
}

function Layout_homePage(props) {
    const { title, id, layoutDisplay, link, children } = props;
    return (
        <div className="layout_container" id={id}>
            <div className="layout_content">
                <div className="layout_title">
                    {title}
                    <Link to={link} className={"layout_see_all"} style={{ display: layoutDisplay }}>
                        <div>see more</div>
                        <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                </div>
                <div className="layout_main">{children}</div>
            </div>
        </div>
    );
}

export default Layout_homePage;