import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class GivePassword extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                showText: false
            }
        }

        handleClick = (event) => {
            if(this.props.pwd === this.input.value) {
                this.setState({
                    showText: true
                })
            }
        }

        render () {
            if(this.state.showText){
                return <div>I'm in!</div>
            }else{
                return (
                    <div>
                        <input ref = {input=> this.input = input}></input>
                        <button onClick = {this.handleClick}>Log in</button>
                    </div>
                )
            }
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <GivePassword pwd = {'tajne hasło'} />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
