import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej

    let a = genNumber();
    let b = genNumber();
    let result = a + b;
    let wynik = prompt(a + '+' + b);
    let info;

    //1 rozwiązanie
    if (result === Number(wynik)){
        info = <div style = {{backgroundColor: 'green'}}>Odpowiedź poprawna</div>

    }else {
        info = <div style = {{backgroundColor: 'red'}}>Odpowiedź błędna</div>
    }

    //2 rozwiązanie
    // let style1 = {
    //     backgroundColor: 'green'
    // };
    //
    // let style2 = {
    //     backgroundColor: 'red'
    // };
    //
    // if (result === Number(wynik)){
    //     info = <div style = {style1}>Odpowiedź poprawna</div>
    //
    // }else {
    //     info = <div style = {style2}>Odpowiedź błędna</div>
    // }

    //3 rozwiązanie
    // function getAnswerElement(a, b, wynik) {
    //     if (result === Number(wynik)){
    //         info = <div style = {{backgroundColor: 'green'}}>Odpowiedź poprawna</div>
    //
    //     }else {
    //         info = <div style = {{backgroundColor: 'red'}}>Odpowiedź błędna</div>
    //     }
    //     return info;
    // }
    //
    // ReactDOM.render(
    //     <div>{getAnswerElement(a, b, wynik)}</div>,
    //     document.getElementById('app')
    // );

    ReactDOM.render(
        <div>{info}</div>,
        document.getElementById('app')
    );


});
