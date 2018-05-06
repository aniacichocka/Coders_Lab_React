import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let a = prompt('Podaj liczbe A');
    let b = prompt('Podaj liczbe B');
    let sign = prompt('Podaj znak');
    let element;


    if (sign === "+") {
        element = <div>{+a + +b}</div>
    } else if (sign === '-'){
        element = <div>{+a - +b}</div>
    } else if (sign === '*'){
        element = <div>{+a * +b}</div>
    } else if (sign === '/'){
        element = <div>{+a / +b}</div>
    }

    ReactDOM.render(
        <h1>{element}</h1>,
        document.getElementById('app')
    );

});


// jak dodam + przed zmienną to będzie traktowana jako liczba nie string, można użyć Number(str)


//
// ReactDOM.render(
//     <h1>{eval[a + sign + b]}</h1>,
//     document.getElementById('app')
// );
