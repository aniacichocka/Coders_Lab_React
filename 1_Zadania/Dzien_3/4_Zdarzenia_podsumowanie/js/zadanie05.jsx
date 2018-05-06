import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SpeedClickGame extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                points: 0,
                totalTime: this.props.time,
                currentTime: this.props.time
            }
        }

        componentDidMount(){
            this.intervalId = setInterval(()=>{
                this.setState({
                    currentTime: this.state.currentTime > 0 ? this.state.currentTime - 50 : 0
                })
            },50)
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
        }

        handleClick = () =>{
            this.setState({
                points: this.state.points + 1,
                totalTime: this.state.totalTime - 50,
                currentTime: this.state.totalTime - 50
            })
        }

        render(){
            return <div>
                   <button disabled={this.state.currentTime === 0 ? 'true' : false} onClick={this.handleClick}>Click me!</button>
                   <h1>{this.state.currentTime}</h1>
                   <h2>{this.state.points}</h2>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <SpeedClickGame time={2000}/>
           </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});






// document.addEventListener('DOMContentLoaded', function(){
//
//     class SpeedClickGame extends React.Component {
//         constructor(props){
//             super(props);
//             this.state = {
//                 time: this.props.time,
//                 counter: 500,
//                 score: 0,
//                 disabled: false
//             }
//         }
//
//         componentDidMount(){
//             this.intervalId = setInterval(() =>{
//                 this.setState({
//                     time: this.state.time > '0' ? this.state.time - this.state.counter : '0',
//                     disabled: this.state.time === '0' ? true : false
//                 })
//             },this.state.counter)
//         }
//
//         componentWillUnmount(){
//             clearInterval(intervalId)
//         }
//
//         getScore =() => {
//             this.setState({
//                 score: this.state.score + 1,
//                 time: this.state.time - this.state.counter
//             })
//         }
//
//         render(){
//             return(
//                 <div>
//                     <button disabled = {this.state.disabled} onClick = {this.getScore}>Click me!</button>
//                     <h1>{this.state.time}</h1>
//                     <h2>{this.state.score}</h2>
//                 </div>
//
//             )
//         }
//     }
//
//     class App extends React.Component {
//         render(){
//             return <div>
//                 <SpeedClickGame time ={20000} />
//             </div>
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
