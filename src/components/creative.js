import React from 'react'

export default props => (
    <section >
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="skills-text">
                        <h2>WE`RE CREATIVE</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /><br />Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <!-- skill bar item --> */}
                    <div className="skillbar-item">
                        <div className="skillbar-score">
                            <span className="score">90</span><span className="percent">%</span>
                        </div>
                        <div className="skillbar" data-percent="90%">
                            <h3>Web design</h3>
                            <div className="skillbar-bar">
                                <div className="skillbar-percent" style={{width: '90%'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- skill bar item --> */}
                    <div className="skillbar-item">
                        <div className="skillbar-score">
                            <span className="score">80</span><span className="percent">%</span>
                        </div>
                        <div className="skillbar" data-percent="80%">
                            <h3>Development</h3>
                            <div className="skillbar-bar">
                                <div className="skillbar-percent" style={{width: '80%'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- skill bar item --> */}
                    <div className="skillbar-item">
                        <div className="skillbar-score">
                            <span className="score">85</span><span className="percent">%</span>
                        </div>
                        <div className="skillbar" data-percent="85%">
                            <h3>Photography</h3>
                            <div className="skillbar-bar">
                                <div className="skillbar-percent" style={{width: '85%'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- skill bar item --> */}
                    <div className="skillbar-item">
                        <div className="skillbar-score">
                            <span className="score">70</span><span className="percent">%</span>
                        </div>
                        <div className="skillbar" data-percent="70%">
                            <h3>Marketing</h3>
                            <div className="skillbar-bar">
                                <div className="skillbar-percent" style={{width: '70%'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)