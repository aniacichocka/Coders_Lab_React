import React from 'react';
import ReactDOM from 'react-dom';

// document.addEventListener('DOMContentLoaded', function(){
//     class TextTyper extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 text: this.props.text,
//                 displayText: '',
//                 counter: this.props.reversed ? this.props.text.length : 1
//             }
//         }
//
//         componentDidMount() {
//             this.intervalId = setInterval(() => {
//                 this.setState({
//                  displayText: this.state.text.slice(0, this.state.counter),
//                  counter: this.props.reversed ? this.state.counter - 1 : this.state.counter + 1})
//             }, 1000)
//         }
//         componentWillUnmount() {
//             clearInterval(this.intervalId)
//         }
//         render () {
//             return <div>{this.state.displayText}</div>
//         }
//     }
//
//     class App extends React.Component {
//         render() {
//             return <TextTyper text={'Witaj!'} reversed={true}/>
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });


document.addEventListener('DOMContentLoaded', function(){
    class TextTyper extends React.Component {
        constructor(props) {
            super(props);
            let txt = 'Witaj!';
            this.state = {
                text: txt,
                displayText: '',
                counter: this.props.reversed ? txt.length : 1
            }
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
               this.setState({
                 displayText: this.state.text.slice(0, this.state.counter),
                 counter: this.props.reversed ? this.state.counter - 1 : this.state.counter + 1})
            }, 1000)
        }

        componentWillUnmount() {
            clearInterval(this.intervalId)
        }
        render () {
            return <div>{this.state.displayText}</div>
        }
    }

    class App extends React.Component {
        render() {
            return <TextTyper reversed={false}/>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
