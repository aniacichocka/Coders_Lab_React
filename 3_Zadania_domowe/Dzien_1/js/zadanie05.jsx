import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let size = '300px';

    ReactDOM.render(
        <div style = {{width: size, height: size, backgroundColor:'blue'}}></div>,
        document.getElementById('app')
    )
});
