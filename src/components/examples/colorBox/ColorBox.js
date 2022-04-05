import React, { useState } from 'react';

Colorbox.propTypes = {

};

function getRandomcolor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
};

function Colorbox() {


    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box') || 'deeppink';
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomcolor();
        setColor(newColor);
        localStorage.setItem('color_box', newColor);
    }

    return (
        <div
            className='color_box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            color box
        </div>
    );
}

export default Colorbox;