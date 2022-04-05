import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import New_box from './content/New_box';
import New_menu from './content/new_menu';
import Footer from '../homePage/content/footer/Footer';
import New_banner from './content/New_banner';

const News = (props) => {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news_type',
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

    return (
        <Fragment>
            <New_menu />
            <New_banner />
            <div className="box_container">
                {
                    results.map((result, index) => {
                        return <New_box
                            key={index}
                            id={result.id}
                            title={result.type}
                        />
                    })
                }
            </div>
            <Footer />

        </Fragment>
    );
}

export default News;