import React from 'react'
import style from './Card.css'
// "box-shadow": "0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
// ,"borderRadius":"1rem"
const Card = (props) => {
    const { image, title, text, link } = props
    return (
        <div className="rounded-4" style={{ "marginTop": "6rem", "marginLeft": "1rem", "marginRight": "1rem", "marginBottom": "4rem", "paddingTop": "3rem", "paddingBottom": "3rem" }}>
            <div className="card mx-4" style={{ style }}>
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} className="img-fluid" alt="" /></a>
                    <a href="#!">
                        <div className="mask" style={{ "backgroundCcolor": "rgba(255, 255, 255, 0.1)" }}></div>
                    </a>
                </div>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text.length < 225 ? text : text.slice(0, 225) + "..."}</p>
                    <button type="button" className="btn btn-secondary btn-rounded">Continue Reading →</button>
                </div>
            </div>
        </div>
    )
}

export default Card