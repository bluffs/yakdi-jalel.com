import React, { useState } from 'react';

import './Projects.css';
import Project from '../../Components/Project/Project';
import Arrow from '../../images/arrow.png';

const Projects = () => {
    const [num, setNum] = useState(0);

    const tab = [];
    tab.push({title:"Red Tetris", image:"RedTetris.png", desc:"One Page Web Application. Ce projet permet a l'utilisateur de se connecter sur un salon de jeu pour lancer une partie de Tetris en ligne seul ou a plusieurs. Je l'ai réalisé en utilisant React, Node et Redux"});
    tab.push({title:"AlphaBot", image:"Alphabot.png", desc:"Application qui a pour but d'automatiser des tâches. L'utilisateur peut créer des profils, puis configurer des tâches a faire éxécuter par un bot. Il peut ensuite voir l'état de ses tâches et les modifier, supprimer, ou démarrer à sa guise. Technologies utilisée : React, Node, Electron, Puppeteer"});
    tab.push({title:"3rd title", image:"Alphabot.png", desc:"The desc of 3rd project"});

    return (
        <div className="Projects" id="projets">
            <Project title={tab[num].title} desc={tab[num].desc} image={tab[num].image} />
            <br />
            <div className='Select'>
                <p><img src={Arrow} alt='Arrow left' className="arrow left" onClick={() => {setNum((num - 1 + tab.length) % tab.length)}} /> 
                <img src={Arrow} alt='Arrow right' className="arrow" onClick={() => {setNum((num + 1) % tab.length)}} /></p>
            </div>
        </div>
    )
}

export default Projects;