import React from "react";
import profileImage from "../../Images/programmer.jpg";
// portfolio
import articleImage from "../../Images/article.jpg"
import todoImage from "../../Images/todo.jpg"
import siteImage from "../../Images/website.png"
// skills
import reactImage from "../../Images/react.png";
import awsImage from "../../Images/aws.jpg";
import railsImage from '../../Images/rails.jpg'

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Yuta,K.</h1>

      <img src={profileImage} className="profileImage" alt="image4" />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        sint autem doloribus iste ipsam sapiente qui nam? 
        Totam corporis veniamunde praesentium sit officia doloremque rem nulla?
        Ea nobis, aliasreprehenderit debitis nostrum illo facere numquam voluptates, soluta
        aliquam incidunt neque voluptatum nisi nesciunt. Laborum eos officia
        aspernatur aliquam aperiam.
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              Here is a list of the works I have created!
            </h3>
          </div>

          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <img src={articleImage} alt="image1" />
              <h4 class="my-3">記事投稿アプリ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>

            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <img src={todoImage} alt="image1" />
              <h4 class="my-3">タスク管理アプリ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>

            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <img src={siteImage} alt="image1" />
              <h4 class="my-3">コーポレートサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">Skills</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={railsImage} alt="image1" />
              <h4>バックエンド</h4>
              <p>Ruby on Rails がつかえます</p>
            </div>

            <div class="col-md-4 services">
              <img src={reactImage} alt="image2" />
              <h4>フロントエンド</h4>
              <p>React がつかえます</p>
            </div>

            <div class="col-md-4 services">
              <img src={awsImage} alt="image3" />
              <h4>AWS</h4>
              <p>Amazon Web Servicesがつかえます</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
