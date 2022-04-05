import React from 'react';
import PropTypes from 'prop-types';
import Value_item from './Value_item';
import Layout_homePage from '../layout/Layout_homePage';

Value.propTypes = {

};

function Value(props) {
  return (
    <Layout_homePage id="value">
      <div className="value_container">
        <Value_item title="Trust" />
        <Value_item title="Responsibility" />
        <Value_item title="Solidarity" classAdd='value_mt' />
        <Value_item title="Respect" classAdd='value_mt' />
        <Value_item title="Demanding approach" classAdd='value_center' />
      </div>
    </Layout_homePage>
  );
}

export default Value;