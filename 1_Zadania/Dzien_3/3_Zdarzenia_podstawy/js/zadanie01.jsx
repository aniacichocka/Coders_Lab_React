import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component{
        handleClick(){
            console.log('click');
        }

        handleEnter(){
            console.log('onMouseEnter');
        }

        handleLeave(){
            console.log('onMouseLeave');
        }

        render(){
            return (
                <button onClick = {this.handleClick} onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave}>
                </button>
            )
        }
    }

    class App extends React.Component{
        render(){
            return(
                <div>
                    <Box />
                </div>
            )
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
