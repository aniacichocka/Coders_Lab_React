import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Advertisement extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                display1: 'block',
                display2: 'none'
            }
        }
        render(){
            return <div>
                {this.props.children}
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Advertisement>
                    <p><span>Jestem span</span></p>
                    <button>pokaż reklamę</button>
                </Advertisement>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
