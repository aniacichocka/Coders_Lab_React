import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let colors = ['black', 'red', 'orange', 'pink', 'yellow'];

    ReactDOM.render(
        <div>{colors.join(', ')}</div>,
        document.getElementById('app')
    )
});
