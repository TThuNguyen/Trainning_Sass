import React from 'react';
import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';
import About_item from './About_item';

About.propTypes = {

};

function About(props) {
    return (
        <Layout_homePage title="About Us" id="about" layoutDisplay="flex" link="/aboutUs">
            <div className="about_container">
                <div className="about_img" style={{ backgroundImage: "url('" + "https://i.ibb.co/2FSJQd4/PNV-2020-XMas2020-Video-2020-XMas-Photos.jpg" + "')" }}></div>
                <div className="about_content">
                    <About_item
                        title="Conduct a fair and rigorous selection"
                        icon="far fa-edit"
                        content="Concentrating on the poorest areas in the large region surrounding seven provinces, our selection process follows four stages:
                        information sessions, written exams, individual interviews and social investigations." />
                    <About_item
                        title="Provide a general training in professional skills"
                        icon="fas fa-chalkboard-teacher"
                        content="This differentiating component of our training programs is highly appreciated by recruiting companies." />
                    <About_item
                        title="Deliver a solid technical and practical training"
                        icon="fas fa-laptop-code"
                        content="Focusing on employability, Passerelles numériques’ training is constantly updated in order to match business needs; it aims at being practical, targeted and certified." />
                    <About_item
                        title="Ensure a social and educational development"
                        icon="fas fa-chart-line"
                        content="To prepare our students to become autonomous and independent adults,
                        Passerelles numériques has developed a personal development extra-curricular program which revolves around PN’s values:
                        trust, responsibility, solidarity. Our holistic educative approach also helps our students to acquire solid general knowledge and better understand the world around them." />
                    <About_item
                        title="Facilitate access to employment"
                        icon="fas fa-search-location"
                        content="Students are guided through both their internship and job search by our External Relations department, closely supported by our alumni network and by PN’s partners (resume and cover letter workshops, individual follow-up and coaching, career orientation sessions, regular sessions of job interview roleplays)." />
                </div>
            </div>
        </Layout_homePage>
    );
}

export default About;