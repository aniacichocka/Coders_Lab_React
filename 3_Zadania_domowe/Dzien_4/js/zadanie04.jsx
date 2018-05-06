import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class AdultStuffBox extends React.Component{
        render(){
            if (this.props.age < 18){
                return null;
            }else {
                return <p>'Lorem ipsum, treść dla pełnoletnich.''</p>
            }
        }
    }

    class AdultStuff extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                age: ''
            }
        }
        handleChange = (event)=>{
            this.setState({
                age: event.target.value
            })
        }
        render(){
            return <div>
                <input type = 'number' value = {this.state.age} onChange = {this.handleChange}></input>
                <AdultStuffBox  age = {this.state.age}/>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <AdultStuff  />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
