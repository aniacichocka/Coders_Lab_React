import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';

    let kolor = prompt('podaj kolor');
    let style = {};
    let error = "";

    if(kolor.indexOf('red')===0 || kolor.indexOf('blue')===0 || kolor.indexOf('green')===0){
        style = {
        width: '100px',
        height: '100px',
        border: '5px solid ' + kolor
        }
    } else{
        error = "nieprawidlowy kolor";
    }


    ReactDOM.render(
        <div>
            <img src ={imageUrl} />
            <div style={style}>{error}</div>
        </div>,
        document.getElementById('app')
    );
});
