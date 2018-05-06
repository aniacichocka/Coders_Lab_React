import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Buttons extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                text: 'Klik',
                width: '100px'
            }
        }

        handleFirstClick = () =>{
            console.log("Pierwszy przycisk kliknięty");
        }

        handleSecondClick = () =>{
            this.setState({text: 'Click!'})
        }

        changeStyleOnClick = () =>{
            this.setState({width: '300px'})
        }

        render(){
            return(
                <div>
                    <button onClick = {this.handleFirstClick}>{this.state.text}</button>
                    <button onClick = {this.handleSecondClick}>{this.state.text}</button>
                    <button style = {{width:this.state.width}} onClick = {this.changeStyleOnClick}>{this.state.text}</button>
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <Buttons />
                </div>
            )
        }
    }


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
