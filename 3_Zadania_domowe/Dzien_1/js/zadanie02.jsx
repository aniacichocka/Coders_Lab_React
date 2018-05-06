import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let name = prompt('podaj imię');
    let age = prompt('podaj wiek');

    ReactDOM.render(
        <div>{name} ma {age} lat</div>,
        document.getElementById('app')
    )
});
