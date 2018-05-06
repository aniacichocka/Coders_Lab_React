import React from 'react';
import ReactDOM from 'react-dom';

// document.addEventListener('DOMContentLoaded', function(){
//     class HelloWorld extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 counter: this.props.counter
//             }
//             console.log('constructor')
//         }
//         componentWillMount(){
//             console.log('componentWillMount')
//         }
//         componentDidMount() {
//             console.log('componentDidMount')
//
//             this.intervalId = setInterval(() => {
//                 this.setState({counter: this.state.counter+1})
//             }, 1000)
//         }
//         componentWillUnmount() {
//             console.log('componentWillUnmount')
//
//             clearInterval(this.intervalId)
//         }
//         render () {
//             console.log('render')
//             return <div>{this.state.counter}</div>
//         }
//     }
//
//     class App extends React.Component {
//         render() {
//             return <HelloWorld counter={0}/>
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });




document.addEventListener('DOMContentLoaded', function(){
    class HelloWorld extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                text: "Hello, World!"
            }
        }
        componentDidMount(){
            this.intervalId = setInterval(() => {
                this.setState({text: "Hi, Everyone!"})
            }, 5000);
        }
        componentWillUnmount(){
            clearInterval(intervalId);
        }
        render(){
            return <h1>{this.state.text}</h1>
        }
    }

    class App extends React.Component {
        render() {
            return <HelloWorld />
        }
    }

     ReactDOM.render(
         <App />,
         document.getElementById('app')
     );
});
