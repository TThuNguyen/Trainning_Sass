import React from 'react';
import PropTypes from 'prop-types';

Value_item.propTypes = {
    title: PropTypes.string,
    classAdd: PropTypes.string,
};

Value_item.defaultProps = {
    title: '',
    classAdd: '',
}

function Value_item(props) {
    const { title, classAdd } = props;
    return (
        <div className={"value_item " + classAdd}>
            <div className="value_title">{title}</div>
        </div>
    );
}

export default Value_item;