import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let a = prompt('Podaj liczbe A');
    let b = prompt('Podaj liczbe B');
    let sign = prompt('znak');
    let element;


    function calc(a, b, sign){
        if (sign === "+") {
            element = <h1>{+a + +b}</h1>
        } else if (sign === '-'){
            element = <h2>{+a - +b}</h2>
        } else if (sign === '*'){
            element = <h3>{+a * +b}</h3>
        } else if (sign === '/'){
            element = <h4>{+a / +b}</h4>
        }
        return element;
    }

    ReactDOM.render(
        <h1>{calc(a, b, sign)}</h1>,
        document.getElementById('app')
    );

});
