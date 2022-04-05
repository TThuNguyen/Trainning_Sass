import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';
import Goal_item from './Goal_item';
Goal.propTypes = {

};

function Goal(props) {
    return (
        <Layout_homePage >
            <div className="goal_container">
                <Goal_item img="/assets/img/goal/goals.png" content="PNV has been carrying out activities to develop and contribute to The Sustainable Development Goals (SDGs)." box="goal_item_box" />
                <Goal_item img="/assets/img/goal/noPoverty.png" content="At least 90% of the students enrolled in our programs can escape poverty, be professionally more successful relatively to the national average." />
                <Goal_item img="/assets/img/goal/qualityEducation.png" classAdd="goal_ipad" content="To provide education, technical and professional training in the digital sector to young underprivileged people by leveraging their potential and willpower." />
                <Goal_item img="/assets/img/goal/genderEquality.png" classAdd="goal_ipad" content="PN’s additional objective is to reduce inequality between genders. Therefore, PNPN’s additional objective is to reduce inequality between genders. Therefore, PNV strives to enrol a ratio of at least 50% girls (or a maximum of two thirds) at each of our centers." />
            </div>
        </Layout_homePage>
    );
}

export default Goal;