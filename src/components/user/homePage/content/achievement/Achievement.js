import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout_homePage from '../layout/Layout_homePage';

const Achievement = (props) => {
    const [results, setResults] = useState([]);

    const [index, setIndex] = useState(0);

    const plus = () => {
        setIndex(index + 1);
    }
    const minus = () => {
        setIndex(index - 1);
    }

    console.log(index);

    // const get = () => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8000/api/achievement',
    //     })
    //         .then((res) => {
    //             setResults(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // }

    // useEffect(() => {
    //     get();
    // }, [])

    return (
        <Layout_homePage title="Student Achievement" id="achievement">
            <div className="achievement_container">
                <div className="shell">
                    {/* Tab panes*/}
                    <div className="layout-horizontal layout-horizontal_md-reverse">
                        {/* <div className="layout-horizontal__main">

                        </div> */}
                        <div className="layout-horizontal__aside">
                            <div className="slick-slider-vertical">
                                <div className="slick-slider carousel-parent nav" id="parent-carousel-1" data-loop="true" data-dots="false" data-swipe="true" data-items={1} data-child="#child-carousel-1" data-for="#child-carousel-1">
                                    <div className="item" >
                                        <div className="slick-image">
                                            <img src="https://i.ibb.co/JpzmM4j/IMG-20210719-115304.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item" >
                                        <div className="slick-image">
                                            <img src="https://i.ibb.co/W2WNCw3/hotel.png" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slider carousel-child" id="child-carousel-1" data-for="#parent-carousel-1" data-arrows="true" data-loop="true" data-dots="false" data-swipe="true" data-items={3} data-xs-items={3} data-sm-items={3} data-md-items={3} data-lg-items={3} data-slide-to-scroll={1} data-vertical="false" data-xs-vertical="false" data-sm-vertical="true" data-md-vertical="true" data-lg-vertical="true" data-center-mode="true">
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="https://i.ibb.co/JpzmM4j/IMG-20210719-115304.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="https://i.ibb.co/W2WNCw3/hotel.png" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="https://i.ibb.co/8g0Nn0b/Travel.png" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout_homePage>
    );
}

export default Achievement;