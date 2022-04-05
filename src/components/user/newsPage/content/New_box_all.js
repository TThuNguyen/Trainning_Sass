import React from 'react';
import New_box_item from './New_box_item';
import PropTypes from 'prop-types';


New_box_all.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
};

New_box_all.defaultProps = {
    title: '',
     image:'',
     time:'',
     content:'',
 }
function New_box_all(props) {
    const {title , image, time, content, children} = props;

    return (
        <div>
            <div id="1" className="all_content">
                <New_box_item title={title}  image={image} time={time} content={content}/>
                <New_box_item title={title}  image={image} time={time} content={content} />
                <New_box_item title={title}  image={image} time={time} content={content}/>
                <New_box_item title={title}  image={image} time={time} content={content}/>
                <New_box_item title={title}  image={image} time={time} content={content} />
                <New_box_item title={title}  image={image} time={time} content={content} />
                <New_box_item title={title}  image={image} time={time} content={content} />
                <New_box_item title={title}  image={image} time={time} content={content} />
                <New_box_item title={title}  image={image} time={time} content={content} />
            </div>
            

            {/* <div  className="all_content ">
                <div className="all_page ">
                    <div className="all_page_pagination">
                        <a href="#">&laquo;</a>
                        <a href="#1">1</a>
                        <a href="#2" class="active">2</a>
                        <a href="#3">3</a>
                        <a href="#4">4</a>
                        <a href="#5">5</a>
                        <a href="#6">6</a>
                        <a href="#7">&raquo;</a>
                    </div>
                </div>

            </div> */}
             
        </div>
    );

}



export default New_box_all;