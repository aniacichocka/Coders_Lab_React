import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SecretStuff extends React.Component {
        render() {
            if (this.props.pwd !== this.props.correctPwd){
                return null;
            }
            else {
                return <div>
                   {this.props.secret}
                </div>;
            }
        }
    }

    class App extends React.Component {
        render() {
            return <div>
                <SecretStuff pwd={'coders'} correctPwd={'coders'} secret={'tajny napis'}/>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
