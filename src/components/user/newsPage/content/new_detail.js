import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../homePage/content/menu/Menu';
import Footer from '../../homePage/content/footer/Footer';

const New_detail = (props) => {
     const { id } = useParams();
     const [results, setResults] = useState([]);
     const [result, setResult] = useState([]);
     const [comment, setComment] = useState({ 'news_id': id });

     const onChange = (e) => {
          const key = e.target.name;
          const value = e.target.value;
          const newComment = { ...comment, [key]: value };

          setComment(newComment);
     }

     const get = () => {
          axios({
               method: 'get',
               url: 'https://fightingfishpnv22laravel.herokuapp.com/api/news/' + id,
          })
               .then((res) => {
                    setResult(res.data);
               })
               .catch((err) => {
                    alert(err);
               });
     }
     const getComment = () => {
          axios({
               method: 'get',
               url: 'https://fightingfishpnv22laravel.herokuapp.com/api/newsComment',
          })
               .then((res) => {
                    let arr = [];
                    res.data.forEach(item => {
                         if (item.news_id === id) arr.push(item);
                    });
                    setResults(arr);
               })
               .catch((err) => {
                    alert(err);
               });
     }

     const post = (e) => {
          e.preventDefault();
          axios({
               method: 'post',
               url: 'http://127.0.0.1:8000/api/newsComment',
               data: comment,
          })
               .then((res) => {
                    localStorage.setItem('email', res.data);
                    let arr = [];
                    res.data.forEach(item => {
                         if (item.news_id == id) arr.push(item);
                    });
                    setResults(arr);

               })
               .catch((err) => {
                    alert(err);
               });
     }


     useEffect(() => {
          get();
          getComment();
     }, [])

     return (
          <Fragment>
               <Menu />
               <div className="main">
                    <div className="detail">
                         <p>{result.title}</p>
                    </div>
                    <div className="d-flex ml-2">
                         <Link to="/news" color="red" >
                              <img src="https://image.flaticon.com/icons/png/512/0/340.png" style={{ height: '20px' }} />
                         </Link>
                         <p>{result.updated_at}</p>
                    </div>
                    <hr />
                    <div className="content">
                         <img src={result.img} style={{ width: '100%' }} />
                         <h4>{result.shortContent}</h4>
                         <p>{result.content}</p>
                    </div>
                    {/* <div className="row">
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://i1.wp.com/hocjavascript.net/wp-content/uploads/2021/05/Math.random-co-thuc-su-la-random-hay-khong.png" alt="Mountains" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor sit amet, tempor prodesset eos no.
                                        Temporibus necessitatibus sea ei, at tantas oporteat
                                        nam. Lorem ipsum dolor sit amet, tempor prodesset eos
                                        no.
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                   </p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg" alt="Lights" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum ipsum dolor sit amet, dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg" alt="Lights" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor  ipsum dolor sit amet, ipsum dolor sit amet, sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://i0.wp.com/static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Among-Us-Random-Name-Generator.jpg?w=750&ssl=1" alt="Nature" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor sit ametipsum dolor sit amet,, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                    </div> */}
               </div>
               <div className="main_comment">
                    {
                         results.map((result, index) => {
                              return <div key={index} className="new_comment_name_content">
                                   <div className="new_comment_name">{result.email}</div>
                                   <div>{result.content}</div>
                              </div>
                         })
                    }

               </div>
               <div className="main_comment">
                    <form className="main_comment_form">
                         <div>
                              <input type="email" placeholder="email..." name="email" onChange={onChange} className="form-control"></input>
                         </div>
                         <div>
                              <textarea id="subject" name="content" className="form-control" onChange={onChange} placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
                         </div>
                         <div>
                              <input type="button" onClick={post} defaultValue="Submit" />
                         </div>
                    </form>
               </div>

               <Footer />
          </Fragment>
     );

}

export default New_detail;