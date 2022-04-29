import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Home.css'
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel'
const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ style }}>
        <div className="main">
          <div data-aos="zoom-in-left" data-aos-duration="1300" className="Quote">
            <h1>Always remember, your focus determines your reality</h1>
            <h6>~ George Lucas</h6>
          </div>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  )
}

export default Home