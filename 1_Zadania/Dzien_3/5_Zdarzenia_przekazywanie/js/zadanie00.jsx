import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ButtonToClick extends React.Component{
        handleOnClick = () =>{
            if (typeof this.props.clickMethod === 'function') {
                this.props.clickMethod();
            }
        }

        render(){
            return <button onClick={this.handleOnClick}>Click</button>
        }
    }

    class ButtonCounter extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                counter: 0
            }
        }

        handleClick = () =>{
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render(){
            return <div>
                <h1>{this.state.counter}</h1>
                <ButtonToClick clickMethod = {this.handleClick}/>
                <ButtonToClick clickMethod = {this.handleClick}/>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <ButtonCounter />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
