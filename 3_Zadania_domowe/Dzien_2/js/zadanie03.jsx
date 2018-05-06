import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class RandomNumbers extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                array: []
            }
        }

        componentDidMount(){
            let newArray = this.state.array;
            for (let i = 0; i < this.props.count; i++) {
                newArray.push(Math.floor(Math.random() * (this.props.max - this.props.min) ) + this.props.min);
            }

            this.setState({
                array: newArray
            })

        }

        render(){
            return (
                <div>
                    <RandomNumbersInfo min = {this.props.min} max = {this.props.max} count = {this.props.count}/>
                    <RandomNumbersList numbers = {this.state.array}/>
                </div>
            )
        }
    }

    class RandomNumbersInfo extends React.Component{
        render(){
            return <div>
                <span>{`min: ${this.props.min} max: ${this.props.max} count: ${this.props.count}`}</span>
            </div>
        }
    }

    class RandomNumbersList extends React.Component{
        render(){
            return <div>
                <span>{this.props.numbers.join( ', ')}</span>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <RandomNumbers min = {2} max = {15} count = {3} />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

// document.addEventListener('DOMContentLoaded', function(){
//
//     function RandomNumbers(props){
//         for (let i = 0; i < props.count; i++) {
//             props.array.push(Math.floor(Math.random() * (props.max - props.min) ) + props.min);
//         }
//         return (
//             <div>
//                 <RandomNumbersInfo min = {props.min} max = {props.max} count = {props.count}/>
//                 <RandomNumbersList numbers = {props.array}/>
//             </div>
//         )
//     }
//
//     function RandomNumbersInfo(props){
//         return <div>
//             <span>{`min: ${props.min} max: ${props.max} count: ${props.count}`}</span>
//         </div>
//     }
//
//     function RandomNumbersList(props){
//         return <div>
//             <span>{props.numbers.join( ', ')}</span>
//         </div>
//     }
//
//     function App(){
//         return <RandomNumbers min = {2} max = {15} count = {3} array = {[]} />
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
