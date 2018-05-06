import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie01';

document.addEventListener('DOMContentLoaded', function(){
    //
    // let element = person.map(function(per){
    //
    //     return (<div key={per.name}>
    //         <h1>{per.title} {per.name} {per.surname}</h1>
    //         <span>{per.age}</span>
    //     </div>)
    //
    // })


    ReactDOM.render(
        // <div>{element}</div>,
        <div>
            <h1>{person.title}{person.name}{person.surname}</h1>
            <span>{person.age}</span>
        </div>,
        document.getElementById('app')
    );
});
