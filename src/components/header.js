import React from 'react'

// import classes from './header.module.scss'
import './header.scss'

export default () => (
    <header >
        <div className="container">
            <div className="slider-container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome To Our Studio!</div>
                    <div className="intro-heading">It's Nice To Meet You</div>
                    <a href="#about" className="page-scroll btn btn-xl">Tell Me More</a>
                </div>
            </div>
        </div>
    </header>
)