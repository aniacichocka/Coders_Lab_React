import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Bulb extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                color: 'grey',
                width: '100px',
                height: '100px',
                text: 'On'
            }
        }

        changeBulb = () =>{
            if (this.state.text === 'On'){
                this.setState({
                    color: 'yellow',
                    text: 'Off'})
            }else {
                this.setState({
                    color:'grey',
                    text: 'On'
                })
            }

            // this.setState({color: this.state.color === 'grey' ? 'yellow' : 'grey' text: this.state.text === 'On' ? 'Off' : 'On'})
        }

        render(){
            return(
                <div>
                    <div style = {{backgroundColor: this.state.color, width: this.state.width, height: this.state.height}}>
                        <button onClick = {this.changeBulb}>{this.state.text}</button>
                    </div>
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <Bulb />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
