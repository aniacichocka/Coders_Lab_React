import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let age = prompt('wiek');

    ReactDOM.render(
        <div id={age < 18 ? 'youth' : 'adult'}>{age}</div>,
        document.getElementById('app')
    );
});
