import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component{
        handleClick(){
            console.log('działa');
        }

        render(){
            return <button onClick = {this.handleClick}></button>
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
