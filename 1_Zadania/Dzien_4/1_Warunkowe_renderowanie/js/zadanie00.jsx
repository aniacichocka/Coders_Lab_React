import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MyCheckbox extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                text: 'NIE'
            }
        }

        render(){
            return <button onClick = {() => {
                this.state.text === 'NIE' ? this.setState({text:'TAK'}) : this.setState({text:'NIE'})}}>{this.state.text}</button>
        }
    }

    class App extends React.Component{
        render(){
            return <MyCheckbox />
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
