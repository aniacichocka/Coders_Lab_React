import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MobileMenu extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                displayBlock: 'block',
                displayNone: 'none'
            }
        }

        changeDisplayList = () =>{
            this.setState({
                displayBlock: 'none',
                displayNone: 'block'
            })
        }

        hideList = () =>{
            this.setState({
                displayBlock: 'block',
                displayNone: 'none'
            })
        }

        render(){
            return(
                <menu >
                    <div onClick = {this.changeDisplayList} style = {{display: this.state.displayBlock}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu"></img>
                    </div>
                    <div style = {{display: this.state.displayNone}}>
                        <ul>
                            <li>Menu 1...</li>
                            <li>Menu 2...</li>
                            <li>Menu 3...</li>
                            <li>Menu 4...</li>
                        </ul>
                        <div onClick = {this.hideList}>Schowaj menu</div>
                    </div>
                </menu>
            )
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <MobileMenu />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
