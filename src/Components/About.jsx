import React from 'react'


function About() {
    return (
        <div className="container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="yo" />
                            <figcaption class="figure-caption">Jose Daniel Corredor Zambrano</figcaption>
                        </figure>
                        <hr></hr>
                        <div>
                            <h4>Contacto</h4>
                            <a  className="btn btn-outline-secondary me-3" target="_blank" href="https://wa.me/573059044855" rel="noreferrer">Teléfono</a>
                            <a className="btn btn-outline-secondary me-3" target="_blank" href="https://github.com/jose827corrza" rel="noreferrer">Github</a>
                            <a className="btn btn-outline-secondary me-3" target="_blank" href="https://www.linkedin.com/in/jose-daniel-corredor/" rel="noreferrer">LinkedIn</a>
                            {/* <p><strong>Teléfono</strong>: +57 3059044855</p>
                            <p><strong>Github</strong><a href="https://github.com/jose827corrza">: https://github.com/jose827corrza</a></p>
                            <p><strong>LinkedIn</strong>: +57 3059044855</p> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            Ingeniero Electromecánico - Desarrollador de Software
                        </h3>
                        <p>
                            Estudiante de último ciclo de MisionTic 2022, con profundización en desarrollo web,
                            con habilidades de análisis lógico, programación orientada a objetos, versionamiento en Git y
                            conocimiento en implementación de servicios AWS tales como, S3, EC2, DynamoDB y VPC.


                        </p>
                        <p>
                            He realizado implementación de inteligencia artificial creada en Python, y desarrollado proyectos
                            a nivel personal a traves de varios lenguajes de programacion, soy una persona con actitud de aprendizaje constante,
                            con capacidad de análisis matemático con
                            ingles técnico y conversacional avanzado
                        </p>
                        <hr></hr>
                        <p>
                            Mis grandes pasatiempos son hacer deporte, caminar, programar e implementar IoT en mi hogar y mi vida. InMe gusta estar en contacto con la naturaleza 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
