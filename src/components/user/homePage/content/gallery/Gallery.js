import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout_homePage from '../layout/Layout_homePage';

function Gallery(props) {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/gallery',
        })
            .then((res) => {
                setResults(res.data.slice(0, 9));
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    return (
        <Layout_homePage title="Our Gallery" id="gallery">
            <div id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter=".filter-ero">Ero Team</li>
                                <li data-filter=".filter-edu">Edu Team</li>
                                <li data-filter=".filter-it">IT Team</li>
                                <li data-filter=".filter-students">Students</li>
                                <li data-filter="*" className="filter-active">All</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="row portfolio-container"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-1.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title1</div>
                        </div>
                        {
                            results.map((result, index) => {
                                return <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-students">
                                    <a
                                        href="assets/img/gallery/portfolio-1.jpg"
                                        data-gallery="portfolioGallery"
                                        className="portfolio-lightbox preview-link"
                                        title="App 12"
                                    >
                                        <img
                                            src="assets/img/gallery/portfolio-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <div className="portfolio-info">title1</div>
                                </div>
                            })
                        }

                        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-students">
                            <a
                                href="assets/img/gallery/portfolio-2.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title2</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-ero">
                            <a
                                href="assets/img/gallery/portfolio-3.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title3</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-ero">
                            <a
                                href="assets/img/gallery/portfolio-4.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-4.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title4</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-edu">
                            <a
                                href="assets/img/gallery/portfolio-5.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-5.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title5</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-edu">
                            <a
                                href="assets/img/gallery/portfolio-6.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-6.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title6</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-it">
                            <a
                                href="assets/img/gallery/portfolio-7.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-7.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title7</div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-it">
                            <a
                                href="assets/img/gallery/portfolio-8.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-8.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title8</div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-it">
                            <a
                                href="assets/img/gallery/portfolio-9.jpg"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox preview-link"
                                title="App 12"
                            >
                                <img
                                    src="assets/img/gallery/portfolio-9.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </a>
                            <div className="portfolio-info">title9</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout_homePage>
    );
}

export default Gallery;