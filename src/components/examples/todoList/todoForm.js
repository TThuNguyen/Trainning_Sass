import React, { useState } from 'react';
import PropTypes from 'prop-types';

todoForm.propTypes = {
    onTodoSubmit: PropTypes.func,
};

todoForm.defaultProps = {
    onTodoSubmit: null
}

function todoForm(props) {

    const { onTodoSubmit } = props;
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!onTodoSubmit) return;

        const formValue = {
            title: value,
        }

        onTodoSubmit(formValue);
    }

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="value" value={value} onChange={onChange}></input>
            <input type="submit" value="add"></input>
        </form>
    );
}

export default todoForm;