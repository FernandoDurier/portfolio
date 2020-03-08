import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Projects</span>
								<h2 className="colorlib-heading animate-box">Interests</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Natural Language Processing</a></h3>
											<span>My efforts in this subarea of AI revolves around developing systems capable of comprehend our language.</span>
											<span>To do so I leverage upon Python, Beautiful Soup, Natural Language ToolKit, Polyglot, and Gensim.</span>
											<span>Working with: Lemmatization, Tokenization, Web Scraping, Sentiment Analysis, Word Vectorization, and Text Classifiers</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Knowledge Discovery in Databases - KDD</a></h3>
											<span>KDD is the foundation of all my research interests.</span>
											<span>KDD is the process of data extraction, transformation and load, then looking for patterns and discovering relevant usage of it, thus knowledge.</span>
											<span>One of my main specialties in this field of research is that of Data Fusion, the process of enrich dataset with information from other sources.</span>
											<span>For this area I've worked with Jupyter Notebooks to do my experiments, SQL and NoSQL Databases, Text Mining, Data Mining, Data Transformation, etc.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Agent & Multi-Agent Systems</a></h3>
											<span>The research area of agent oriented systems is an interesting application of the models I develop and study, since this area tries to simulate intelligent and/or human behavior in computer systems.</span>
											<span>My main researches in this area revolves around the architecture of those agent oriented systems and their communication protocol.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Reinforcement Learning</a></h3>
											<span>One of the main concerns in the KDD area is the lack of pre labeled data into an unknown environment.</span>
											<span>Reinforcement Learning covers the techniques and algorithms to map an unknown exploratory space, and let the intelligent system to find his way in such space trying to maximize the environmental rewards towards its goal.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Analytics</a></h3>
											<span>One of the key components of KDD is to deliver value and solve the proposed problem.</span>
											<span>The best way to show your findings or to plan which would be the best data transformation strategies to preprocess your dataset is to have a good and clear visualization.</span>
											<span>My preferred visualizations are the ones from Analytics Dashboards such as Tableau or Watson Analytics, and the Seaborn and Matplotlib libraries from Python</span>
											<span>To show the solutions my models give, normally, I choose the 3D scatterplot when handling overlaping classification problems, Tree Maps or Decision Trees for simpler classification, and Dendograms and Sunbursts for Clustering problems.</span>
											<span>Of course the visualization depends on the nature of the problem being handled.</span>
											<span></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img6.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Business Process Management</a></h3>
											<span>The research area that introduced me to this world, BPM is the area that focus on techniques and analysis of continuous flow of events and how to optimize and better monitor its fluidity in order to attain its final goal.</span>
											<span>My main works in this area is the application of Data Fusion and NLP for Predictive Monitoring of Processes.</span>
											<span>One of my interests in the area is also the Process Discovery in Event Logs, the Process Mining activity.</span>
											<span>My preffered tools to explore this area are ProM, Camunda, Bonita, Weka(for simple and quick analysis), and Bizagi.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
