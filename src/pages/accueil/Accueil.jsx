import React from "react";
import { Link } from "react-router-dom";
import bard from "./../../assets/bardvs chat.jpg";
import war from "./../../assets/war.png";
import about from "./../../assets/about.jpg";
import follow from "./../../assets/follow.png";
import box3 from "./../../assets/box_03.jpg";
import share from "./../../assets/share.png";
import banner from "./../../assets/banner.jpg";
import insta1 from "./../../assets/insta_01.jpeg";
import insta2 from "./../../assets/insta_03.jpeg";
import insta3 from "./../../assets/insta_09.jpeg";
import insta4 from "./../../assets/blog_01.png";
import { posts } from "../../data";
import "./accuielle.scss";
const Accueil = () => {
  return (
    <div className="accueil">
      <div className="containers">
        <div className="title">
          <img src={insta4} alt="" />
        </div>

        <div className="container">
          <div className="section__left">
            <div className="articl__1">
              <img className="bard" src={bard} alt="" />

              <div className="intro">
                <div className="top">
                  <span className="lifestyle">Technologie</span>
                  <h4>
                    <Link>
                      Bard and CHATGBT: The Evolution of Artificial Intelligence
                    </Link>
                  </h4>

                  <span>
                    <i> Posted on 17 june - By Amanda - 5 Comments</i>
                  </span>
                  <p>
                    The fields of artificial intelligence (AI) and natural
                    language processing (NLP) have grown exponentially in recent
                    years, with advancements in technology leading to more
                    sophisticated algorithms and models that can understand and
                    generate human-like language.
                  </p>
                  <button>Continue Reading</button>
                </div>
                <hr />
                <div className="bottoms">
                  <div className="article">
                    <div className="articl__1">
                      {posts.map((post) => (
                        <Link to="/detail/123">
                          <div key={post.id} className="article">
                            <div className="article__left">
                              <img src={box3} alt="" />
                            </div>
                            <div className="article__right">
                              <div className="top">
                                <span className="lifestyle">Lifestyle</span>
                                <h4>
                                  <Link>{post.title}</Link>
                                </h4>

                                <span>
                                  <i>
                                    Posted on {post.date} - By Amanda - 5
                                    Comments
                                  </i>
                                </span>
                                <p>{post.desc}</p>
                              </div>
                              <hr />
                              <div className="bottom">
                                <span>CONTINUE READING</span>
                                <img src={share} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="may_like"></div>
          </div>
          <div className="section__right">
            <div className="about">
              <h3>
                <span>About Me</span>
              </h3>
              <img src={about} alt="" />
              <p>
                Duis scelerisque sem at erat accumsan sodales. Duis non mattis
                risus, ut vehicula orci. Cras mollis augue at metus tincidunt
                convallis.
              </p>
            </div>

            <div className="advertise">
              <h3>
                <span>Advertise</span>
              </h3>
              <img src={banner} alt="" />
            </div>

            <div className="Follow">
              <h3>
                <span>Follow on Instagram</span>
              </h3>
              <img src={follow} alt="" />
            </div>

            <div className="Blog">
              <h3>
                <span>Blog Categories</span>
              </h3>
              <hr />
              <Link>
                <span className="blog__text">LifeStyle (12)</span>
              </Link>
              <hr />
              <Link>
                <span className="blog__text">Travel (12)</span>
              </Link>
              <hr />
              <Link>
                <span className="blog__text">Fashion (12)</span>
              </Link>
              <hr />
              <Link>
                <span className="blog__text">Blogging (12)</span>
              </Link>
              <hr />
              <Link>
                <span className="blog__text">Marketing (12)</span>
              </Link>
              <hr />
            </div>

            <div className="Latest">
              <h3>
                <span>Latest Posts</span>
              </h3>
              <div className="picture">
                <div className="picture__left">
                  <img src={insta1} alt="" />
                </div>
                <div className="picture__right">
                  <h5>A Beautiful Minimal Website Design</h5>
                  <small>12 Jan, 2016</small>
                </div>
              </div>

              <div className="picture">
                <div className="picture__left">
                  <img src={insta2} alt="" />
                </div>
                <div className="picture__right">
                  <h5>A Beautiful Minimal Website Design</h5>
                  <small>12 Jan, 2016</small>
                </div>
              </div>

              <div className="picture">
                <div className="picture__left">
                  <img src={insta3} alt="" />
                </div>
                <div className="picture__right">
                  <h5>A Beautiful Minimal Website Design</h5>
                  <small>12 Jan, 2016</small>
                </div>
              </div>
            </div>

            <div className="about">
              <h3>
                <span>Tag Cloud</span>
              </h3>
              <div className="links">
                <Link className="link" to="/">
                  design
                </Link>
                <Link className="link" to="/">
                  art
                </Link>
                <Link className="link" to="/">
                  gallery
                </Link>
                <Link className="link" to="/">
                  fashion
                </Link>
                <Link className="link" to="/">
                  modern
                </Link>
                <Link className="link" to="/">
                  creative
                </Link>
                <Link className="link" to="/">
                  respo
                </Link>
                <Link className="link" to="/">
                  antica
                </Link>
                <Link className="link" to="/">
                  mobsen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
