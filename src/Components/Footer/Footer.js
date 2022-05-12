/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import style from './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-1" style={{ style }}>
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div data-aos="slide-right" data-aos-duration="1300" className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">PrimeInternship<span></span></h5>
                                <p><strong>PrimeInternship</strong> India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, and other streams.</p>
                            </div>
                        </div>

                        <div data-aos="slide-right" data-aos-duration="1300" className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="#.">Get Started</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Top Leaders</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Success Stories</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">News</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Lifestyle</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">About</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1300" className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Get Started<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                <a className="btn" href="https://bit.ly/3m9avif" target="_blank">Subscribe Now</a>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1300" className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us<span></span></h5>

                                <p><a href="mailto:sabhi0825@gmail.com" title="glorythemes">Abhi Singh</a></p>
                                <ul className="social-footer2">
                                    <li className=""><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li className=""><a href="https://twitter.com" target="_blank" title="Twitter"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li className=""><a title="instagram" target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram-square"></i>   </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright AbhiSingh IIT2020214© 2022. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer