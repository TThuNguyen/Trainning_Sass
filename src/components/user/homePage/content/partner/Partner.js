import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Layout_homePage from '../layout/Layout_homePage';

function Partner(props) {
  const [results, setResults] = useState([]);

  const get = () => {
    axios({
      method: 'get',
      url: 'https://fightingfishpnv22laravel.herokuapp.com/api/partner',
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
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <Layout_homePage title="Our Partners" id="partner">
      <Carousel responsive={responsive} autoPlaySpeed={2000} autoPlay={true} infinite={true}>
        {results.map((item, index) => {
          return (
            <div key={index} className="partner_item">
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </Carousel>
    </Layout_homePage>

  );
}

export default Partner;