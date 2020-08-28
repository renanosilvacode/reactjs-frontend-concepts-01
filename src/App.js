 import React from 'react';
 import Header from './components/Header';
 
//The component is a function that return HTML ~for now
//Property: Send info from a child to a parent (like a HTML atribute) 
//

 function App() {
    return (
        //Fragments: Create a container to separate components w/o using HTML DOM
        <>
            <Header title="HomePage">
                <ul>
                    <li>Home</li>
                    <li>Page</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Pro</li>
                    <li>Jects</li>
                </ul>
           </Header>
        </>
    );
}

export default App;