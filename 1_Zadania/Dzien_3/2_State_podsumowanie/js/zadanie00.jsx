import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Clock extends React.Component{
        constructor(props){
            super(props);
            this.state= {
                date: new Date()
            }
        }
        componentDidMount(){
            this.intervalId = setInterval(()=>{
                this.setState({date: new Date()})
            }, 1000)
        }
        componentWillUnmount(){
            clearInterval(intervalId)
        }
        render(){
            return (
                <div>
                    <ClockTime date = {this.state.date}/>
                    <ClockDate date = {this.state.date}/>
                </div>
            )
        }
    }

    class ClockTime extends React.Component{
        render(){
            return <h1>{this.props.date.toLocaleTimeString()}</h1>
        }
    }
    class ClockDate extends React.Component{
        render(){
            return <h1>{this.props.date.toLocaleDateString()}</h1>
        }
    }

    class App extends React.Component {
        render() {
            return <Clock />
        }
    }

     ReactDOM.render(
         <App />,
         document.getElementById('app')
     );
});


// document.addEventListener('DOMContentLoaded', function(){
//     class Clock extends React.Component {
//         constructor(props) {
//             super(props);
//         }
//         render() {
//             return <div>
//                 <ClockTime date={new Date()}/>
//                 <ClockDate date={new Date()}/>
//             </div>
//         }
//     }
//
//     class ClockTime extends React.Component {
//         constructor (props) {
//             super(props)
//             this.state = {time: this.props.date.toLocaleTimeString()}
//         }
//         componentDidMount() {
//             this.intervalId = setInterval(() => {
//              this.setState({
//                 time: new Date().toLocaleTimeString()
//             })
//             },1000)
//         }
//         componentWillUnmount() {
//             clearInterval(this.this.intervalId)
//         }
//         render() {
//             return <div>{this.state.time}</div>
//         }
//     }
//
//     class ClockDate extends React.Component {
//         render() {
//             return <div>{this.props.date.toLocaleDateString()}</div>
//         }
//     }
//
//
//     class App extends React.Component {
//         render() {
//             return <Clock />
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
