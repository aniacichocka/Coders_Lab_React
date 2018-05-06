import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function Sum1(props){
        return <h1>{props.numbers.reduce(function(p,c){
            return p+c;
        })}</h1>
    }


    class Sum extends React.Component {
        render(){
            return <h1>{this.props.numbers.reduce(function(p,c){
                return p+c;
            })}</h1>
        }
    }


    ReactDOM.render(
        <Sum numbers ={[1,2,3,4,5]} />,
        document.getElementById('app')
    );
});
