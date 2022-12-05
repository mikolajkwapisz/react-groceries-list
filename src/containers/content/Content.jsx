import React from "react";
import './content.css';
import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Bob')

    const randomName = () => {
        const names = ['Bob', 'Kevin', 'John']
        setName(names[randomNumber(0, names.length)])
    }

    
    const handleClick2 = (name) => {
        alert(`Name: ${name}`)
    }

    return(
        <main className="blue">
            <h1>Hello {name}!</h1>
            <button onClick={randomName}>Change name</button>
            <button onClick={ () => handleClick2('Maciek')}>Click me</button>
        </main>
    )
}

const randomNumber = ( min, max ) => {
    return Math.floor( Math.random() * ( max - min) + min)
}

export default Content