import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){

    let elements = people.map(function(person){
        return <div key={person.name}>{person.name} {person.surname}</div>
    })

    ReactDOM.render(
        <div>{elements}</div>,
        document.getElementById('app')
    );
});
