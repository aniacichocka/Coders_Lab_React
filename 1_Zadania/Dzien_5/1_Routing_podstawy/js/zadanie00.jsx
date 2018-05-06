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
                    {this.props.children}
                </div>
            )
        }
    }

    class AboutTemplate extends React.Component {
        render() {
            return (
                <div>
                    <h2>O nas</h2>
                    {this.props.children}
                </div>
            )
        }
    }

    class Main extends React.Component {
        render() {
            return (
                <div>
                    <h1>Witaj na stronie!</h1>
                </div>
            )
        }
    }

    class AboutCompany extends React.Component {
        render() {
            return <p>Trochę więcej na temat firmy...</p>
        }
    }

    class AboutUs extends React.Component {
        render() {
            return <p>Trochę więcej o nas...</p>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Main} />
                        <Route path='/about' component={AboutTemplate}>
                            <Route path='/about/us' component={AboutUs}/>
                            <Route path='/about/company' component={AboutCompany}/>
                        </Route>
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


// document.addEventListener('DOMContentLoaded', function(){
//     class NotFound extends React.Component {
//         render() {
//             return <h1>404,Nothing is here</h1>
//         }
//     }
//
//     class Template extends React.Component {
//         render() {
//             return (
//                 <div>
//                     <h1>App</h1>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                     {this.props.children}
//                 </div>
//             )
//         }
//     }
//
//     class Main extends React.Component {
//         render() {
//             return (
//                 <div>
//                     <h1>Hello, World!</h1>
//                     <Link to="/contact">Go to contact</Link>
//                 </div>
//             )
//         }
//     }
//
//     class Contact extends React.Component {
//         render() {
//             return <h1>Contact us at contact@example.com</h1>
//         }
//     }
//
//     class App extends React.Component {
//         render() {
//             return(
//                 <Router history={hashHistory}>
//                     <Route path='/' component={Template}>
//                         <IndexRoute component={Main} />
//                         <Route path='/contact' component={Contact} />
//                         <Route path='*' component={NotFound} />
//                     </Route>
//                 </Router>
//             )
//         }
//     }
//
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
