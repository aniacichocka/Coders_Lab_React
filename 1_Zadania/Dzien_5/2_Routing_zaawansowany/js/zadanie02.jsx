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
          return <h1> <IndexLink to="/">Home</IndexLink></h1>;
        }
    }

    class Template extends React.Component {
        render() {
            const activeStyle = {
                border:'1px green solid'
            };
            return <div>
                    Aplikacja React z React Router
                        <ul>
                            <li>
                                <IndexLink to="/services/www">www</IndexLink>
                            </li>
                            <li>
                                <IndexLink to="/services/shop">shop</IndexLink>
                            </li>
                            <li>
                                <IndexLink to="/services/seo">seo</IndexLink>
                            </li>
                        </ul>
                        {this.props.children}
                    </div>
        }
    }

    class ServiceInfo extends React.Component {
        render () {
            let template;
            if (this.props.params.service === 'www' ||
                this.props.params.service === 'shop' ||
                this.props.params.service === 'seo') {
                template = <h1>Proponujemy usługę: {this.props.params.service}</h1>
            } else {
                template = <h1> <IndexLink to="/">Home</IndexLink></h1>;
            }
            return template;
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
                            <Route path='/services/:service' component={ServiceInfo} />
                        </Route>
                        <Route path='*' component={NotFound} />
                    </Router>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
