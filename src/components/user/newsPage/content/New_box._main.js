import React from 'react';
import { Link } from 'react-router-dom';

const New_box_main = (props) => {
    const { result } = props;
    return (
        <div className="new_main_container">
            <Link to={result ? "/new_detail/" + result.id : "#"} >
                <div  >
                    <div className="main_image" style={{ backgroundImage: result ? "url('" + result.img + "')" : '' }} />
                </div>
            </Link>

            <div className="main_content_title">
                <Link to={result ? "/new_detail/" + result.id : "#"} style={{ color: 'black' }} >
                    <div className="main_title">{result ? result.title : ''} </div>
                </Link>
                <div className="main_time">{result ? result.updated_at : ''} </div>
                <div className="main_content">{result ? result.shortContent : ''} </div>
                <Link to={result ? "/new_detail/" + result.id : "#"}  >
                    <span className="item_readMore_button">Đọc thêm</span>
                </Link>
            </div>

        </div>
    );

}



export default New_box_main;