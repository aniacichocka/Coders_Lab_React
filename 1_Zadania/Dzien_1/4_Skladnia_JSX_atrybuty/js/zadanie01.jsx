import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

    const red = {
        backgroundColor: 'red',
        height: '100px'
    }

    const green = {
        backgroundColor: 'green',
        height: '100px'
    }

    const blue = {
        backgroundColor: 'blue',
        height: '100px'
    }

    const redDiv = <div style = {red}></div>;
    const blueDiv = <div style = {blue}></div>;
    const greenDiv = <div style = {green}></div>;

    // const redDiv = <div style = {{backgroundColor: 'red', height: '100px'}}></div>;
    // const blueDiv = <div style = {{backgroundColor: 'blue', height: '100px'}}></div>;
    // const greenDiv = <div style = {{backgroundColor: 'green', height:'100px'}}></div>;


    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv} {greenDiv} {blueDiv}
        </div>,
        document.getElementById('app')
    );
});
