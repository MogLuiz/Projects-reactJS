import React, { useState } from 'react'

import Header from './components/Header'

function App() {

    const [projects, setProjects] = useState(['Analista Desenvolvedor', 'FrontEnd'])

    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`)

        setProjects([...projects,`Novo Projeto ${Date.now()}`])
    }

    return (
        <>
            <Header title="HommePage" />

            <ul>
                {projects.map( project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>           
        </>
    )
}

export default App