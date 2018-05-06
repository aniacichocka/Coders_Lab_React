import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class CrazyDiv extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                left: 0,
                top: 0
            }
        }

        changeCrazyDiv = () =>{
            let number = (Math.floor(Math.random() * (1000 + 1))+0);
            this.setState({
                left: number + 'px',
                top: number + 'px'
                // left: `${(Math.floor(Math.random() * (1000 + 1))+0)}px`
            })
        }


        render(){
            return <div style = {{backgroundColor: 'red', position: 'absolute', height: '100px', width: '100px', left: this.state.left, top: this.state.top}} onMouseEnter = {this.changeCrazyDiv}></div>
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <CrazyDiv />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
