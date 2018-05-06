import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                color: 'green',
                width: '500px',
            }
        }

        changeBox1 = () =>{
            this.setState({
                color: 'blue',
                width: '400px'
            })
        }

        changeBox2 = () =>{
            this.setState({
                color: 'green',
                width: '500px'
            })
        }

        render(){
            return <div style = {{backgroundColor: this.state.color, width: this.state.width, height: '200px'}} onMouseEnter = {this.changeBox1} onMouseLeave = {this.changeBox2}></div>
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <Box />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
