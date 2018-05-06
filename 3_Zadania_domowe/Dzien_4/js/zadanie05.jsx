import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class DynamicLego extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                number: 0
            }
        }
        handleChange = (event)=>{
            this.setState({
                number: event.target.value
            })
        }
        render(){
            let lego = [];
            for (let i = 1; i <= this.state.number; i++) {
                lego.push(<li key = {i} style = {{backgroundColor: 'red', height: '50px', width: `${i*50}px`}}></li>)
            }
            return <div>
                <input type = 'number' value = {this.state.number} onChange = {this.handleChange}></input>
                <ul>
                    {lego}
                </ul>

            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <DynamicLego  />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
