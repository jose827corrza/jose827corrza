import React from 'react'
import Card from './Card'
import rasp from '../assets/rasp.jpg'
import investigacion from '../assets/investigacion.jpg'
import electricidad from '../assets/electricidad.jpg'

const cards = [
    {
        id: 1,
        title: 'Desarrollo',
        image: rasp,
        url: "https://github.com/jose827corrza",
        texto: 'The develop of new technologies on different systems such as, Arduino, Raspberry, Windows and Linux. Starts from the simple sensor reading up to the complete implementation of few actuators and sensors to automate an entire system'
    },
    {
        id: 2,
        title: 'Linkedln',
        image: electricidad,
        url: "https://www.linkedin.com/in/jose-daniel-corredor/",
        texto: "My personal space, where you can find my education, preofessional experience and certifications, you cand contact with me through this way."
    },
    {
        id: 3,
        title: 'Investigacion',
        image: investigacion,
        url: "https://www.google.com.co/?gfe_rd=cr&ei=PuOxU9uaA5fBgATVjoHoAQ&gws_rd=ssl",
        texto: "Here you can watch the implementation of the new technologies, giving them a practical use where these generate a big impact, specially the implementation of an AI able to make a forecast that is use to prepare an automatized harvesting system"
    }
]
function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                
                {
                    cards.map(({title, image, id, url, texto}) => (
                        <div className="col-md-4" key={id}>
                            <Card title={title} imageSource={image} url={url} text={texto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
