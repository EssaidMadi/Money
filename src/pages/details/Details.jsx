import React from "react";
import { Link } from "react-router-dom";
import bard from "./../../assets/bardvs chat.jpg";
import war from "./../../assets/war.png";
import about from "./../../assets/about.jpg";
import follow from "./../../assets/follow.png";
import banner from "./../../assets/banner.jpg";
import insta1 from "./../../assets/insta_01.jpeg";
import insta2 from "./../../assets/insta_03.jpeg";
import insta3 from "./../../assets/insta_09.jpeg";
import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="containers">
        <div className="title">
          <div className="left">
            <h1>Category by: Technologie</h1>
            <p class="lead">
              Under this category we share Technologie articles with you.
            </p>
          </div>

          <div className="right">
            <span>Matild / Tech</span>
          </div>
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
                      Bard and CHTGBT: The Evolution of Artificial Intelligence
                    </Link>
                  </h4>

                  <span>
                    <i> Posted on 17 june - By Amanda - 5 Comments</i>
                  </span>
                </div>

                <div className="bottoms">
                  <div className="article">
                    <div className="article__left">
                      <img src={war} alt="" />
                    </div>
                    <div className="article__right">
                      <div className="top">
                        <p>
                          The fields of artificial intelligence (AI) and natural
                          language processing (NLP) have grown exponentially in
                          recent years, with advancements in technology leading
                          to more sophisticated algorithms and models that can
                          understand and generate human-like language. Two
                          examples of these advancements are Bard and CHTGBT,
                          two powerful language models that have made
                          significant contributions to the field of AI.
                        </p>
                        <p>
                          <b>
                            Bard is a large-scale transformer-based language
                            model that was developed by OpenAI in 2021. It is
                            trained on a massive corpus of text data, including
                            books, articles, and web pages, and is capable of
                            generating highly coherent and fluent language in a
                            variety of styles and genres.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="all__article">
                    <p>
                      Bard has been used in a number of applications, including
                      chatbots, language translation, and content generation,
                      and is considered to be one of the most advanced language
                      models currently available. CHTGBT, on the other hand, is
                      a more specialized language model that was developed by a
                      team of researchers at the University of California,
                      Berkeley. Unlike Bard, which is trained on a wide range of
                      text data, CHTGBT is specifically designed to generate
                      coherent and informative responses to questions about
                      computer hardware and technology. It is based on a
                      transformer architecture and is trained on a large dataset
                      of technical documents and manuals. Despite their
                      different approaches and applications, Bard and CHTGBT
                      share a number of similarities in terms of their
                      underlying architecture and the algorithms they use to
                      process language. Both models are based on the transformer
                      architecture, which is a type of deep neural network that
                      is particularly well-suited to language processing tasks.
                      This architecture allows the models to learn and represent
                      complex linguistic relationships and patterns, which
                      enables them to generate highly coherent and contextually
                      appropriate responses. Additionally, both models use a
                      variety of techniques to improve their performance,
                      including attention mechanisms, pre-training, and
                      fine-tuning. Attention mechanisms allow the models to
                      focus on specific parts of the input text when generating
                      responses, which helps to ensure that their outputs are
                      relevant and informative. Pre-training involves training
                      the models on a large corpus of text data before
                      fine-tuning them on specific tasks, which can improve
                      their overall performance and speed up the training
                      process. Overall, Bard and CHTGBT represent the cutting
                      edge of AI and NLP research, and their development has led
                      to significant advancements in a number of fields,
                      including natural language generation, chatbots, and
                      question-answering systems. As these models continue to
                      evolve and improve, they are likely to become even more
                      sophisticated and powerful, leading to new opportunities
                      and challenges in the field of AI.
                    </p>
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

export default Details;
