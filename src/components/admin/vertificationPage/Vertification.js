import React from 'react';
import PropTypes from 'prop-types';

Vertification.propTypes = {

};

function Vertification(props) {
  return (
    <form className="vertification_body">
      <h1>Vertification Code</h1>
      <div className="vertification_inset">
        <p>
          <input type="number" name="code" id="code" className="vertification_code" placeholder="Enter your code" />
        </p>
        <button type="submit" className="vertification_button" name="go" id="go">Confirm</button>
      </div>

    </form>
  );
}

export default Vertification;