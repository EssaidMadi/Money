import React from "react";
import { Link } from "react-router-dom";
import box3 from "./../../assets/box_03.jpg";
import share from "./../../assets/share.png";
import about from "./../../assets/about.jpg";
import follow from "./../../assets/follow.png";
import banner from "./../../assets/banner.jpg";
import insta1 from "./../../assets/insta_01.jpeg";
import insta2 from "./../../assets/insta_03.jpeg";
import insta3 from "./../../assets/insta_09.jpeg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="containers">
        <div className="title">
          <div className="left">
            <h1>Category by: Lifestyle</h1>
            <p class="lead">
              Under this category we share Lifestyle articles with you.
            </p>
          </div>

          <div className="right">
            <span>Matild / Shop</span>
          </div>
        </div>

        <div className="container">
          <div className="section__left">
            <div className="article">
              <div className="article__left">
                <img src={box3} alt="" />
              </div>
              <div className="article__right">
                <div className="top">
                  <span className="lifestyle">Lifestyle</span>
                  <h4>
                    <Link>How to Dress for Those In-Between Days</Link>
                  </h4>

                  <span>
                    <i> Posted on June 16, 2018 - By Amanda - 5 Comments</i>
                  </span>
                  <p>
                    Sed pulvinar sapien eu eleifend mattis. Curabitur ipsum
                    urna, aliquam a odio et, dapibus vulputate leo. Nulla nec
                    libero vel nisl sollicitudin maximus. Aenean a tempus est.
                    Praesent et dapibus turpis.
                  </p>
                </div>
                <hr />
                <div className="bottom">
                  <span>CONTINUE READING</span>
                  <img src={share} alt="" />
                </div>
              </div>
            </div>
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
              <Link to="/">design</Link>
              <Link to="/">art</Link>
              <Link to="/">gallery</Link>
              <Link to="/">fashion</Link>
              <Link to="/">modern</Link>
              <Link to="/">creative</Link>
              <Link to="/">respo</Link>
              <Link to="/">antica</Link>
              <Link to="/">mobsen</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
