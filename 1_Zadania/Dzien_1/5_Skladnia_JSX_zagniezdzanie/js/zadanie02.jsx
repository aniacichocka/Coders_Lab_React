import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){

    let elements = people.map(function(person){

        return (
            <div key={person.name} className="person">
                <img src={person.avatar}></img>
                <div className="info">
                    <h1>{person.title} {person.name} {person.surname}</h1>
                    <p>{person.bio}</p>
                </div>
            </div>)
    })


    ReactDOM.render(
        <div>{elements}</div>,
        document.getElementById('app')
    );
});
