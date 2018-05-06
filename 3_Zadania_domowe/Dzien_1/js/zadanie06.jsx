import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie06';

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div style = {{width: '300px'}}>
            <h1 style = {{textAlign: 'center'}}>{person.name} {person.surname}</h1>
            <h2 style = {{textAlign: 'center'}}>{person.jobTitle}</h2>
            <hr />
            <h3 style = {{textAlign: 'center'}}>tel. {person.telNumber}</h3>
        </div>,
        document.getElementById('app')
    )
});
