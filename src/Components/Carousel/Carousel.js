import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import style from "./Carousel.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false

                    }
                }
            ]
        };
        return (
            <div className="blogs" id="blogs" style={{ style }}>
                <div style={{ "marginBottom": "3rem" }}  className="container">
                    <Slider {...settings}>
                        <Card image={"https://blog.verzeo.com/wp-content/uploads/2021/10/things-to-look-in-an-internship.jpg"} title={"Top Things To Look For In An Internship"} text={"Internships, as we have mentioned a lot of times, are the building blocks of a student’s career. However, unless the internships aren’t of some real value, they won’t be…Internships, as we have mentioned a lot of times, are the building blocks of a student’s career. However, unless the internships aren’t of some real value, they won’t be beneficial for you in any sort. Internships require value and exposure, which every company can’t provide you."} link={"https://blog.verzeo.com/blog-top-things/"} />



                        <Card image={"https://blog.verzeo.com/wp-content/uploads/2021/10/Internship-Job.jpg"} title={"Best Full-Time Paid Internship Jobs"} text={"Like we discussed in our older blog posts, internships are a whole new opportunity for the students who want to have a successful career ahead and also have some of the perks of being an intern in any kind of company. When it comes to finding the best kind of internship job, there are plenty of opportunities available for you. In case you are want to get enrolled in any company for an internship job and that too full time, then we are here to answer your queries."} link={"https://blog.verzeo.com/blog-websites-for-internship/"} />



                        <Card image={"https://github.blog/wp-content/uploads/2021/02/Breaking-into-tech-internship-edition.png?resize=1200%2C630"} title={"Let’s talk about tech internships"} text={"Are you a student developer looking to land an internship? We’ve got answers! We recently sat down with Co.Lab Co-founder Helen Huang on GitHub Campus TV to find out how to secure an internship and successfully break into the tech industry. Helen shared her personal journey going from earth science student to product manager at Microsoft."} link={"https://github.blog/2021-02-24-lets-talk-about-tech-internships/"} />




                        <Card image={"https://blogs.haverford.edu/ccpa/wp-content/uploads/sites/3/2020/12/Summer-Internship-Blog-Post.jpg"} title={"Guide To Finding Summer Internship Opportunities"} text={"As we near the end of fall semester and look ahead to 2021, the CCPA staff realize many of you may be thinking about summer internships. With COVID-19"} link={"https://blogs.haverford.edu/ccpa/2020/12/04/guide-to-finding-summer-internship-opportunities/"} />





                        <Card image={"https://indian0.com/ank-assets/assets/images/blog/blog-37.png"} title={"What do Interns Expect from Internships?"} text={"Internships are required to be balanced delicately. For many companies, they are an opportunity to get decently qualified candidates at a lower price. In return, they impart the work experience and training that interns need to start working in the field. But with the growing protest by interns today over unreasonably low wages and lack of mentorship, some interns feel companies are falling short of their end of the bargain. So what do interns expect from their internship? Let us have a look:"} link={"https://indian0.com/blog/what-do-interns-expect-from-internship.php"} />

                    </Slider>
                </div>
            </div>
        );
    }
}