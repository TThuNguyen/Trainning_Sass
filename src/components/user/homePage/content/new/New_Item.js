import React from 'react';
import { Link } from 'react-router-dom';

function New_Item(props) {

    const { id, img, title, introduce, like, comment, date } = props;
    return (
        <div className="new_item_container">
            <Link to={"/new_detail/" + id} >
                <div className="new_item_image" style={{ backgroundImage: img }}></div>
            </Link>
            <div className="new_item_title">
                <Link to={"/new_detail/" + id} >{title}</Link>
            </div>
            <div className="new_item_introduce">
                <span className="new_item_text"> {introduce}</span>
                <Link to={"/new_detail/" + id} className="new_read_more">Read More</Link>

            </div>
            <div className="new_item_interactive">
                <div className="interactive_item">
                    <div><i className="far fa-clock"></i></div>
                    <span>{date}</span>
                </div>
                <div className="interactive_item">
                    <div><i className="far fa-heart"></i></div>
                    <span>{like}</span>
                </div>
                <div className="interactive_item">
                    <div><i className="far fa-comment-alt"></i></div>
                    <span>{comment}</span>
                </div>
            </div>
        </div>
    );

}



export default New_Item;