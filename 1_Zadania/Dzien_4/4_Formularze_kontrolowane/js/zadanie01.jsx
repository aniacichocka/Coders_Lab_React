import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class AddTwoNumbers extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                numberA: 0,
                numberB: 0
            }
        }

        handleInput1 = (event) =>{
            this.setState({
                numberA: Number(event.target.value)
            })
        }

        handleInput2 = (event) =>{
            this.setState({
                numberB: Number(event.target.value)
            })
        }

        render(){
            return (
                <div>
                    <input type = 'text' value = {this.state.numberA} onChange = {this.handleInput1}></input>
                    <input type = 'text' value = {this.state.numberB} onChange = {this.handleInput2} ></input>
                    <h1>{!isNaN(this.state.numberA) && !isNaN(this.state.numberB) ? this.state.numberA + this.state.numberB : "Podaj dwie liczby" }</h1>
                </div>
            )
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                    <AddTwoNumbers />
                </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
