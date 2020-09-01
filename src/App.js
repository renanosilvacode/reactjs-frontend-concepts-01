 import React, { useState } from 'react';
 import Header from './components/Header';
 

 import './App.css';

 import imageBackground from './assets/background.jpg';
//The component is a function that return HTML ~for now
//Property: Send info from a child to a parent (like a HTML atribute) 
//State: Any variable that could be updated by the user should be used in a state
//Immutability: Changing the value of a variable in a State indirectely.

 function App() {

    //Deconstructing the variable and the function that will update the variable
    const [projects, setProjects] = useState(['Desenv de App', 'Front End Web']);

    function handleAddProject(){
        //... = spreadOperator
        //Changing the variable projects by copying projects and adding a new item by the end of it
        setProjects([ ...projects, `New Project ${Date.now()}`]);

    }

    return (
        //Fragments: Create a container to separate components w/o using HTML DOM
        <>
            <Header title="HomePage">

                <img width={300} src={imageBackground}/>

                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
            </Header>

            <button type="button" onClick={handleAddProject}>Add Project</button>
        </>
    );
}

export default App;