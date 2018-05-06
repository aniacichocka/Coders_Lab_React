import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>{person.title} {person.name} {person.surname} {person.age}</div>,
        document.getElementById('app')
    );

    // let result = person.name +person.surname + person.age;

});
