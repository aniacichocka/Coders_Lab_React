import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let color = 'blue';

    ReactDOM.render(
        <div style = {{color:color}}>{color}</div>,
        document.getElementById('app')
    )
});
