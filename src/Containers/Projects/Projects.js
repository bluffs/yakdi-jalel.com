import React, { useState } from 'react';

import './Projects.css';
import Project from '../../Components/Project/Project';

const Projects = () => {
    const [num, setNum] = useState(0);

    const tab = [];
    tab.push({title:"Red Tetris", desc:"One Page Web Application. Ce projet permet a l'utilisateur de se connecter sur un salon de jeu pour lancer une partie de Tetris en ligne seul ou a plusieurs. Je l'ai réalisé en utilisant React, Node et Redux"});
    tab.push({title:"AlphaBot", desc:"Application qui a pour but d'automatiser des tâches. L'utilisateur peut créer des profils, puis configurer des tâches a faire éxécuter par un bot. Il peut ensuite voir l'état de ses tâches et les modifier, supprimer, ou démarrer à sa guise. Technologies utilisée : React, Node, Electron, Puppeteer"});
    tab.push({title:"3rd title", desc:"The desc of 3rd project"});

    return (
        <div className="Projects">
            <Project title={tab[num].title} desc={tab[num].desc} />
            <br />
            <div className='Select'>
                <p><i class="arrow left" onClick={() => {setNum((num - 1 + tab.length) % tab.length)}}></i> ------------- 
                <i class="arrow right" onClick={() => {setNum((num + 1) % tab.length)}}></i></p>
            </div>
        </div>
    )
}

export default Projects;