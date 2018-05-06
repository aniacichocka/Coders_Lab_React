import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let rok = prompt('Rok urodzenia');

    ReactDOM.render(
        <h1>{(new Date()).getFullYear() - Number(rok)}</h1>,
        document.getElementById('app')
    );
});
