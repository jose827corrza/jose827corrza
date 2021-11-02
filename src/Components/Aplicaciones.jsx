import React from 'react'

function Aplicaciones() {
    return (
        <div className="container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 ">
                        <label className="control-label animate__fadeInDown"><h3>Frontend</h3></label>
                        <ul class="list-group">
                            <li class="list-group-item">ReactJS</li>
                            <li class="list-group-item">HTML5 y CSS</li>
                            <li class="list-group-item">VueJS</li>
                            <li class="list-group-item">React Native</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <label className="control-label animate__fadeInDown"><h3>Backend</h3></label>
                        <ul class="list-group">
                            <li class="list-group-item">Java</li>
                            <li class="list-group-item">NodeJS</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">MS SQL</li>
                            <li class="list-group-item">Python</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <label className="control-label animate__fadeInDown"><h3>Cloud Computing - otros</h3></label>
                        <ul class="list-group">
                            <li class="list-group-item">AWS - Amazon Web Services</li>
                            <li class="list-group-item">Firebase</li>
                            <li class="list-group-item">Kotlin - Android Studio</li>
                            <li class="list-group-item">Arduino C++</li>
                            <li class="list-group-item">Raspberry - Linux</li>
                            <li class="list-group-item">SolidWorks</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aplicaciones
