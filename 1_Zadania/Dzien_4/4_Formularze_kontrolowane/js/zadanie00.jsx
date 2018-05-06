import React from 'react';
import ReactDOM from 'react-dom';

//ZADANIE HELLO,TY
// document.addEventListener('DOMContentLoaded', function(){
//
//     class HelloName extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 name: 'Ty'
//             }
//         }
//
//         handleInput = (event) => {
//             this.setState({
//                 name: event.target.value
//             })
//         }
//
//         render () {
//             return <div>
//                 <h1>Hello, {this.state.name}</h1>
//                 <input type= 'text' value = {this.state.name} onChange = {this.handleInput}></input>
//             </div>
//         }
//     }
//
//     class App extends React.Component {
//         render() {
//             return <div>
//                     <HelloName />
//                 </div>
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });




//ZADANIE ZLICZANIE
//
document.addEventListener('DOMContentLoaded', function(){

    class TextField extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                selected: ''
            }
        }

        handleSelect = (event) =>{
            this.setState({
                selected: event.target.value
            })
        }

        render(){
            return <div>
                <p>{this.state.selected}</p>
                <span>{this.state.selected.length}</span>
                <select value = {this.state.selected} onChange = {this.handleSelect}>
                    <option value = 'Anna'>Anna</option>
                    <option value = 'Krzysztof'>Krzysztof</option>
                    <option value = 'Ula'>Ula</option>
                </select>
            </div>
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                    <TextField />
                </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
