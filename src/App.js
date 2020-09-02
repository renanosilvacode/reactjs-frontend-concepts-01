 import React, { useState, useEffect } from 'react';
 import Header from './components/Header';
 import Api from './services/api.js';

 import './App.css';

 import imageBackground from './assets/background.jpg';
import api from './services/api.js';
//The component is a function that return HTML ~for now
//Property: Send info from a child to a parent (like a HTML atribute) 
//State: Any variable that could be updated by the user should be used in a state
//Immutability: Changing the value of a variable in a State indirectely.

 function App() {

    //Deconstructing the variable and the function that will update the variable
    const [projects, setProjects] = useState([]);

    //Trigger a function when a parameter is updated
    //First param is the function to be called. 
    //The second parameter is the updated variable. 
    //If is empty, it will trigger the function when the component finished loading 
    useEffect(()=>{
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    },[])

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
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>
            </Header>

            <button type="button" onClick={handleAddProject}>Add Project</button>
        </>
    );
}

export default App;