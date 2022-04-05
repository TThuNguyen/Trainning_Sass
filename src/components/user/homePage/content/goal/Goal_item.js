import React from 'react';
import PropTypes from 'prop-types';

GoalItem.propTypes = {
    content: PropTypes.string,
    img: PropTypes.string,
    box: PropTypes.string,
    classAdd: PropTypes.string,
};

GoalItem.defaultProps = {
    content: '',
    img: '',
    box: '',
    classAdd: '',
}

function GoalItem(props) {
    const { content, img, box, classAdd } = props;
    return (
        <div className={classAdd + " goal_item " + box}>
            <img src={img} alt="" />
            <div className="goal_item_content">{content}</div>
        </div>
    );
}

export default GoalItem;