import React from 'react'
import { Link } from 'react-router-dom'
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
          <div className="Quote">
            <h1>Always remember, your focus determines your reality</h1>
            <h6>~ George Lucas</h6>
            <div className="buttons">
              <Link className="btn btn-outline-light btn-lg my-5 mx-2" to="/login"
              >Login</Link>
              <Link className="btn btn-outline-light btn-lg my-5 mx-2" to="/signup"
              >Sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  )
}

export default Home