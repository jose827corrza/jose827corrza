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
        texto: '1..2..3.. probando'
    },
    {
        id: 2,
        title: 'Linkedln',
        image: electricidad,
        url: "https://www.linkedin.com/in/jose-daniel-corredor/"
    },
    {
        id: 3,
        title: 'Investigacion',
        image: investigacion,
        url: "https://www.google.com.co/?gfe_rd=cr&ei=PuOxU9uaA5fBgATVjoHoAQ&gws_rd=ssl"
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
