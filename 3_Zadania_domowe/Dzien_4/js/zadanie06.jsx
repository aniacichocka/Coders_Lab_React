import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Notes extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                text: ''
            }
        }
        handleChange = (event)=>{
            this.setState({
                text: event.target.value
            })
        }
        handleClick = ()=>{
            this.setState({
                text: ''
            })
        }
        render(){
            return <div>
                <textarea value = {this.state.text} onChange = {this.handleChange}></textarea>
                <button onClick = {this.handleClick}>Wyczyść</button>
                <span>{this.state.text}</span>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Notes  />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
