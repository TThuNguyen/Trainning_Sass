import React from 'react';
// import PropTypes from 'prop-types';

Report.propTypes = {

};

function Report(props) {
  return (
    <section>
    <div className="ab-report">
    <div className="container">
      <p>The annual report will be published each year including the most outstanding information, achievements, difficulties encountered and development orientation for the coming year. Since 2007, the financial statements are audited annually and we also disclose the financial position in the Annual Report.</p>
      <div className="row ab-report-content">
        <div className="col-lg-3 col-md-6">
          <div className="ab-report-box">
            <i className="fas fa-user-graduate" />
            <span data-purecounter-start={0} data-purecounter-end={40} data-purecounter-duration={1} className="purecounter" />
            <p /><h5>
              Graduating students in 2020</h5><p />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="ab-report-box">
            <i className="fas fa-chalkboard-teacher" />
            <span data-purecounter-start={0} data-purecounter-end={45} data-purecounter-duration={1} className="purecounter" />
            <p /><h5>Students enrolling in 2020</h5><p />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="ab-report-box">
            <i className="fas fa-users" />
            <span data-purecounter-start={0} data-purecounter-end={35} data-purecounter-duration={1} className="purecounter" />
            <p /><h5>Staff of PNV in 2020</h5><p />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="ab-report-box">
            <i className="fas fa-hand-holding-heart" />
            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
            <p /><h5>
              Volunteers in PNV in 2020</h5><p />
          </div>
        </div>
      </div>
      <div className="row ab-report-content">
        <div className="col-lg-6">
          <div className="ab-report-progress">
            <span className="ab-report-skill">
              Percentage of female students graduating in 2020</span>
            <div className="ab-report-progress-bar-wrap">
              <div className="ab-report-progress-bar" role="ab-report-progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                70%
              </div>
            </div>
          </div>
          <div className="ab-report-progress">
            <span className="ab-report-skill">
              Percentage of students having jobs after 2 months of graduation in 2020</span>
            <div className="ab-report-progress-bar-wrap">
              <div className="ab-report-progress-bar" role="ab-report-progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                70%
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ab-report-progress">
            <span className="ab-report-skill">
              Enrollment rate of female students in 2021<i className="val">90%</i></span>
            <div className="ab-report-progress-bar-wrap">
              <div className="ab-report-progress-bar" role="ab-report-progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                70%
              </div>
            </div>
          </div>
          <div className="ab-report-progress">
            <span className="ab-report-skill"> 
              Percentage of students from remote areas in 2021 </span>
            <div className="ab-report-progress-bar-wrap">
              <div className="ab-report-progress-bar" role="ab-report-progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
    
 
}

export default Report;