import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //
    // function Hello1(props){
    //     return <h1>{`Hello, ${props.name} ${props.surname}`}</h1>
    // }


    class Hello extends React.Component {
        render(){
            return <h1>{`Hello, ${this.props.name} ${this.props.surname}`}</h1>
        }
    }


    ReactDOM.render(
        <Hello name = 'Adam' surname = 'Kowalski'/>,
        document.getElementById('app')
    );
});
