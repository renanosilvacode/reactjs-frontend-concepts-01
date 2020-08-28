import React from 'react';

//Using destructuring on the props of header (title) for exemple
//children: the content send from a child component within the compoment tags
export default function Header({title, children}){
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}