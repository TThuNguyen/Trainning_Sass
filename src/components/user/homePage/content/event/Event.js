import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Layout_homePage from '../layout/Layout_homePage';


const Event = (props) => {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/event',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Layout_homePage title="Our Event" id="event">
            <Carousel responsive={responsive}>
                {results.map((result, index) => {
                    return <div key={index} className="event_item">
                        <div className="event_left"></div>
                        <div className="event_right">
                            <div className="event_time">{result.time}</div>
                            <div className="event_content">
                                <div className="event_image" style={{ backgroundImage: "url('" + result.img + "')" }}></div>
                                <div className="event_title">
                                    <span>{result.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </Carousel>
        </Layout_homePage>
    );
}

export default Event;