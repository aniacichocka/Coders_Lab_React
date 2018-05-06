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

    class Template extends React.Component {
        render() {
            return (
                <div>
                    <h1>Aplikacja React z React Router</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }


    // class NotFound extends React.Component {
    //     render() {
    //         return <h1>404,Nothing is here</h1>
    //     }
    // }
    class Home extends React.Component {
        render() {
            return <h1>Witaj na stronie</h1>
        }
    }

    class Blog extends React.Component {
        render() {
            return <h1>Blog</h1>
        }
    }

    class Pricing extends React.Component {
        render() {
            return <h1>Cennik</h1>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/pricing' component={Pricing}/>
                    </Route>
                </Router>
            )
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
