import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Button extends React.Component {
        render(){
            return (
                <button>{this.props.text}</button>
            )
        }
    }

    class Message extends React.Component {
        render(){
            return (
                <div>
                    <Button text = {'tak'}/>
                    <Button text = {'nie'}/>
                    <p>{this.props.messageText}</p>
                </div>
            )
        }
    }


    class App extends React.Component {
        render(){
            return(
                <div>
                    <Message messageText = {'czy React jest ok?'}/>
                    <Message messageText = {'jaka jest pogoda?'}/>
                    <Button text = {'Zaloguj'}/>
                    <Button text = {'Zarejestruj'}/>
                </div>
            )
        }
    }


    // function Button(props){
    //     return <button>{props.text}</button>
    // }
    //
    // function Message(props){
    //     return (
    //         <div>
    //             <Button text = {'tak'}/>
    //             <Button text = {'nie'}/>
    //             <p>{props.messageText}</p>
    //         </div>
    //     )
    // }
    //
    // function App(){
    //     return(
    //         <div>
    //             <Message messageText = {'czy React jest ok?'}/>
    //             <Message messageText = {'jaka jest pogoda?'}/>
    //             <Button text = {'Zaloguj'}/>
    //             <Button text = {'Zarejestruj'}/>
    //         </div>
    //     )
    // }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
