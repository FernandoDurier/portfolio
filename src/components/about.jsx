import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am D.Sc. Candidate at The Federal University of the State of Rio de Janeiro - UNIRIO, researching about Artificial Intelligence and Natural Language Processing.</p>
                    <p>My passion for Data Science and Machine Learning came from my mathmatics and science class in my young age, exactly during my first class about human neural system, and matrixes.</p>
                    <p>In the college I started by database and info theory, then sought their application in my scientific scholarship in Business Process Management, where my research was about the application of knowledge discover in database's process to processes' logs in order to discover key process attributes that were important to predict its flow.</p>
                    <p>My grad's thesis was about the usage of sociopolitical context sentiment analysis data to enhance the predictive monitoring task of a process. Such work provided me good foundation to my research area nowadays as I processed tons of news in order to extract its sentiment charges and imbue into proceesses' events time frame. Also granted me a renowned paper in the area.</p>
                    <p>My next challenge then was the Fake News, as they come to be a great issue in political context at 2016, 2018, and even nowadays. So in my Master's work I researched and developed a model and methodology capable of differentiate True, Sarcastic and Fake Brazilian Portuguese News.</p>
                    <p>Always looking for a challenge, now my goal is to extend my research investigating new models and data fusion processes to improve my classification model Judice Verum (the Judge of Truth).</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>I have experience on data processing and transformation, information fusion, webscraping, and data mining in order to solve a given problem.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>In order to keep my experiments running correctly and optimal I leverage my knowledge upon data structures and algorithm analysis.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Software Development</h3>
                    <p>Working for more than 3 years for IBM polished my software development skills I've learned throughout my graduations.</p>
                    <p>Have worked with convetional and non-convetional database management, web application development, containerization, cluster computing, and machine learning model development.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
