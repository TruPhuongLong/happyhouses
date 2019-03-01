import React from 'react'

export default props => (
    <section id="portfolio" className="light-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-1.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Dean & Letter</h2>
                                <p>Branding, Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-1">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item --> */}
                {/* <!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-2.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Startup Framework</h2>
                                <p>Branding, Web Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item --> */}
                {/* <!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-3.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Lamp & Velvet</h2>
                                <p>Branding, Web Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-3">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item --> */}
            </div>
            <div className="row">
                {/* <!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-4.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Smart Name</h2>
                                <p>Branding, Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-4">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item --> */}
                {/* <!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-5.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Fast People</h2>
                                <p>Branding, Web Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-5">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item -->
				<!-- start portfolio item --> */}
                <div className="col-md-4">
                    <div className="ot-portfolio-item">
                        <figure className="effect-bubba">
                            <img src="images/demo/portfolio-2.jpg" alt="img02" className="img-responsive" />
                            <figcaption>
                                <h2>Kites & Stars</h2>
                                <p>Branding, Web Design</p>
                                <a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* <!-- end portfolio item --> */}
            </div>
        </div>
        {/* <!-- end container --> */}
    </section>
)