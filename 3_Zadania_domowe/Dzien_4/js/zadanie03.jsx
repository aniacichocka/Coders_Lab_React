import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class PESELInput extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                pesel: ''
            }
        }
        handleChange = (event)=> {
            this.setState({
                pesel: event.target.value
            })
        }
        render(){
            // let info;
            // if(this.state.pesel.length === 11){
            //     info =<input type = 'submit'>Prześlij</input>;
            // }else{
            //     info = 'Niepoprawny numer PESEL';
            // }

            return <div>
                <input value = {this.state.pesel} onChange = {this.handleChange}></input>
                <div>{this.state.pesel.length === 11 ? <input type='submit'>Prześlij</input> : 'Niepoprawny numer PESEL'}</div>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <PESELInput />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
