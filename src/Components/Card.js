import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';


function Card({ title, imageSource, url, text }) {
    return (
        <div className="card text-center bg-dark h-100 animate__animated animate__fadeInUp">
            <div className="overflow">
                <img className="card-img-top" src={imageSource} alt="" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text
                    }</p>
                <Link to={"/Aplicaciones"} className="btn btn-outline-secondary rounded-0"  rel="noreferrer">Ver mas!</Link>
            </div>
        </div>
    )
}

export default Card
