import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let numberA = prompt('Podaj liczbe A');
    let numberB = prompt('Podaj liczbe B');


    ReactDOM.render(
        <h1>{+numberA + Number(numberB)}</h1>,
        document.getElementById('app')
    );

});
