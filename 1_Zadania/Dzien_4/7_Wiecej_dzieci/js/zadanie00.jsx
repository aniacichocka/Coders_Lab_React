import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Email extends React.Component{
        render(){
            return <div>
                <h1>{this.props.subject}</h1>
                <div>{this.props.body}<hr />{this.props.footer}</div>
                <pre>{this.props.textBody}<hr />{this.props.footer}</pre>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div><Email
                subject = {
                    <span>Witaj, oto treść maila</span>
                }
                body = {
                    <span>
                        <h1>Promocja z e-maila!</h1>
                        <hr />
                        <p>Witaj, oto Twój nowy e-mail...</p>
                    </span>
                }
                textBody = {
                   <span>
                       <p>Promocja z e-maila!</p>
                        <p>Witaj, oto Twój nowy e-mail...</p>
                    </span>
                }
                footer = {
                    <p>Mail by my
                        <a href="http://example.com/unsubscripe">Kliknij tutaj, aby się wypisać</a>
                    </p>
                }
            /></div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
