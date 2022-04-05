import React, { useState, useEffect } from 'react';
import axios from 'axios';
import New_box_item from './New_box_item';
import New_box_all from './New_box_all';
import New_box_main from './New_box._main';

const New_box = (props) => {
    const [results, setResults] = useState([]);
    const { id, title } = props;
    const [status, setStatus] = useState(1);

    function handleStatusClick() {
        setStatus(2);
    }

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news',
        })
            .then((res) => {
                let arr = [];
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].news_type_id == id) arr.push(res.data[i]);
                }
                setResults(arr);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();

    }, [])





    return (
        <div id={id} >
            <div className="box_header">
                <div className="box_title">{title} </div>
                <div className="new_see_more"
                    onClick={handleStatusClick}
                >
                    <div>See more</div>
                    <div >
                        <img className="" src="https://img.flaticon.com/icons/png/512/25/25426.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                            style={{ height: '20px' }} />
                    </div>
                </div>
            </div>
            <hr className="hr" />
            {
                (status == 1) ?
                    <div className="box_content">
                        <New_box_main result={results[0]} />
                        <div className="box_content_i">
                            {
                                results.map((result, index) => {
                                    if (index != 0)
                                        return <New_box_item key={index} result={result} />
                                })
                            }
                        </div>
                    </div>
                    : ''
                // <New_box_all title={title} image={image} time={time} content={content} />
            }
        </div>
    );

}



export default New_box;