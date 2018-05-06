import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class MathAnswersGame extends React.Component{
        constructor(props){
            super(props)

            let number1 = Math.floor(Math.random() * (9) + 1 );
            let number2 = Math.floor(Math.random() * (9) + 1 );

            this.state = {
                points: 0,
                time: 5000,
                number1,
                number2,
                result: number1 + number2,
                answer: '',
                wrongAnswer: false
            }
        }

        startTimer = () =>{
            if (this.intervalId){
                clearInterval(this.intervalId)
            }

            this.intervalId = setInterval(() =>{
                if(this.state.time !== 0){
                    this.setState({
                        time: this.state.time - 1000
                    })
                }else{
                    if (Number(this.state.answer) === this.state.result) {
                        this.resetData()
                        this.startTimer()
                    } else {
                        this.setState({
                            wrongAnswer: true
                        })
                    }
                }
            },1000)
        }

        resetData = () =>{
            let number1 = Math.floor(Math.random() * (9) + 1 );
            let number2 = Math.floor(Math.random() * (9) + 1 );
            this.setState({
                points: this.state.points + 1,
                time: 5000,
                number1,
                number2,
                result: number1 + number2,
            })
        }

        componentDidMount(){
            this.startTimer()
        }

        componentWillUnmount(){
            clearInterval(this.intervalId)
        }

        handleChange = (event) =>{
            this.setState({
                answer: event.target.value
            })
        }

        render(){

            return (
                <div>
                    <h1>{this.state.wrongAnswer ? 'Koniec Gry' : `${this.state.number1} + ${this.state.number2} =`} </h1>
                    <div>
                        <input type="number" value={this.state.answer} onChange={this.handleChange}/>
                    </div>
                    <h2>{`00:0${this.state.time/1000}`}</h2>
                    <h3>Punkty: {this.state.points}</h3>
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return <MathAnswersGame  />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
