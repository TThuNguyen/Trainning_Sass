import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout_homePage from '../layout/Layout_homePage';
import New_Item from './New_Item';

function New(props) {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news',
        })
            .then((res) => {
                setResults(res.data.slice(0, 3));
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    return (
        <Layout_homePage title="News" id="news" layoutDisplay="flex" link="/news">
            <div className="new_container ">
                {results.map((result, index) => {
                    return <New_Item
                        key={index}
                        id={result.id}
                        img={"url('" + result.img + "')"}
                        title={result.title}
                        introduce={result.shortContent}
                        like={result.users_like}
                        comment="#"
                        date={result.updated_at} />
                })}
            </div>
        </Layout_homePage>
    );
}

export default New;