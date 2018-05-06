import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
  } from 'react-router';

document.addEventListener('DOMContentLoaded', function(){
    class NotFound extends React.Component {
        render() {
            return <h1>404,Nothing is here</h1>;
        }
    }

    class Template extends React.Component {
        render() {

            const activeStyle = {
                border:'1px solid green'
            };

            return <div>
                Aplikacja React z React Router
                    <ul>
                        <li>
                            <IndexLink activeStyle={activeStyle} to="/">Home</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeStyle={activeStyle} to="/hello/Jan">hello</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeStyle={activeStyle} to="/checkage/60">checkage</IndexLink>
                        </li>
                    </ul>
                    {this.props.children}
                </div>;
        }
    }

    class HelloYou extends React.Component {
        render () {
            return (
                <h1>Witaj {this.props.params.name}</h1>
            )
        }
    }

    class CheckAge extends React.Component {
        render () {
            return (
                <h1>{this.props.params.age >= 18 ? 'Palnoletni' : "Niepelnoletni"}</h1>
            )
        }
    }

    class Home extends React.Component {
        render() {
            return <div>
                <h1>Witaj!</h1>
            </div>;
        }
    }

    class App extends React.Component {
        render() {
            return <Router history={hashHistory}>
                        <Route path='/' component={Template}>
                            <IndexRoute component={Home} />
                            <Route path='/hello/:name' component={HelloYou} />
                            <Route path='/checkage/:age' component={CheckAge} />
                        </Route>
                    </Router>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
