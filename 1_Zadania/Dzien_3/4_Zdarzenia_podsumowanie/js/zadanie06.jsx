import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MathQuestionGame extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                operator: ['+', '-', '*'][Math.floor(Math.random()*3)],
                number1: Math.floor(Math.random() * (10 - 1) + 1 ),
                number2: Math.floor(Math.random() * (10 - 1) + 1 ),
                currentTime: 10000,
                text: '',
                blockButton: false
            }
        }

        handleClick = (e, number) =>{
            if (this.state.result === number) {
                this.setState({
                    text: 'Gratulacje!',
                    blockButton: true
                })
            } else {
                this.setState({
                    text: 'Błędna odpowiedź :(',
                    blockButton: true
                })
            }
            clearInterval(this.intervalId);
        }

        componentWillMount(){
            this.results = [eval(this.state.number1 + this.state.operator + this.state.number2),
                Math.floor(Math.random() * (100 - 1) + 1 ),
                Math.floor(Math.random() * (10 - 1) + 1 ),
                Math.floor(Math.random() * (10 - 1) + 1 )];

            this.setState({
                result: eval(this.state.number1 + this.state.operator + this.state.number2)
            })
        }

        componentDidMount(){
            this.intervalId = setInterval(() =>{
                this.setState({
                    currentTime: this.state.currentTime > 0 ? this.state.currentTime - 1000 : 0,
                    blockButton: this.state.currentTime === 0 ? true : false,
                    text: this.state.currentTime === 0 ? 'Czas minął' : this.state.text
                })
            },1000)
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
        }

        shuffle(a){
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
        }

       render(){
            if (this.state.currentTime === 10000){
                this.shuffle(this.results)
            }

            let buttons = this.results.map(el => {
                return <button disabled={this.state.blockButton } onClick={(e) => this.handleClick(e, el)}>{el}</button>
            })

            return <div>
                <h1>{this.state.text ? this.state.text : `${this.state.number1} ${this.state.operator} ${this.state.number2} =`}  </h1>
                <div>
                    {buttons}
                </div>
                <h2>{`00:${this.state.currentTime/1000 === 10 ? 10 : '0'+this.state.currentTime/1000}`}</h2>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <MathQuestionGame />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
