import React from 'react';
import { Link } from 'react-router-dom';

function New_box_item(props) {
    const { result } = props;

    return (
        <div className="new_item_containers">
            <Link to={"/new_detail/" + result.id} style={{ color: 'black' }}>
                <div >
                    <img className="item_image" src={result.img}
                        style={{ width: '320px', height: '180px' }} />
                </div>
            </Link>
            <div className="item_content_title">
                <Link to={"/new_detail/" + result.id} style={{ color: 'black' }}>

                    <div className="item_title">{result.title} </div>
                </Link>
                <div className="item_time">{result.updated_at} </div>
                <div className="item_content" >
                    <div className="item_readMore">
                        {result.shortContent}
                    </div>
                    <Link to={"/new_detail/" + result.id}  >
                        <span className="item_readMore_button">Đọc thêm</span>
                    </Link>
                </div>
                <div className="item_margin"></div>
            </div>
        </div>
    );

}



export default New_box_item;