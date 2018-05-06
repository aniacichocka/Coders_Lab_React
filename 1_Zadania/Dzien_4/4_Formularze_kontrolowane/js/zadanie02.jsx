import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class InteractivDiv extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                number: '100'
            }
        }

        handleNumber = (event) =>{
            this.setState({
                number: Number(event.target.value)
            })
        }

        render(){
            return (
                <div>
                    <input type = 'number' value = {this.state.number} onChange = {this.handleNumber}></input>
                    <div style = {{height: '100px', width:`${this.state.number}px`, backgroundColor: 'red' }}></div>
                </div>
            )
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                    <InteractivDiv />
                </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
