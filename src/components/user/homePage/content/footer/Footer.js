import React from 'react';
// import PropTypes from 'prop-types';

Footer.propTypes = {

};

function Footer(props) {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_name">© 2020 Passerelles numériques | Copyright Information</div>
        <div className="footer_phone">
          <i className="fas fa-mobile-alt"></i>
          <div>84 236 3888 503</div>
        </div>
        <div className="footer_email">
          <i className="far fa-envelope"></i>
          <div>info.vietnam@passerellesnumeriques.org</div>
        </div>
        <div className="footer_icon">
          <a href="https://www.facebook.com/passerelles.numeriques"><img src="assets/img/footer/Facebook.svg"></img></a>
          <a href="https://twitter.com/passerellesnume"><img src="assets/img/footer/Twitter.svg"></img></a>
          <a href="https://www.linkedin.com/company/passerellesnum-riques"><img src="assets/img/footer/LinkedIn.svg"></img></a>
          <a href="https://www.youtube.com/user/PasserellesNumerique"><img src="assets/img/footer/Youtube.png"></img></a>
        </div>
        <div className="footer_name_move">© 2020 Passerelles numériques | Copyright Information</div>
      </div>
    </div>
  );
}

export default Footer;