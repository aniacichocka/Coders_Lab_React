import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function AddNumbers(props){
        return <h1>{+props.numberA + +props.numberB}</h1>
    }

    class AddNumbers1 extends React.Component {
        render(){
            return <h1>{+this.props.numberA + +this.props.numberB}</h1>
        }
    }

    ReactDOM.render(
        <AddNumbers numberA ='3' numberB ='5' />,
        document.getElementById('app')
    );
});
