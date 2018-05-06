import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class AnotherColor extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                color: 'yellow'
            }
            console.log('constructor')
        }

        componentWillMount(){
            console.log('componentWillMount')
        }

        componentDidMount(){
            console.log('componentDidMount')

            this.intervalId = setInterval(() =>{
                this.setState({
                    color: 'blue'
                })
            }, 5000)
        }

        componentWillUnmount(){
            console.log('componentWillUnmount')

            clearInterval(this.intervalId)
        }

        render(){
            console.log('render');

            return <div style = {{width: '100px', height: '100px', backgroundColor: this.state.color}}></div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <AnotherColor />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});


//zostały wywołane: constructor - przechowuje state z kolorem, render - tworzenie elementu, componentDidMount - ustawienie zmiany koloru w czasie, componentWillUnmount - czyszczenie zasobów

//komponent mając cykle żyje własnym życiem - automatyzacja jakiegoś procesu, w przypadku wielokrotnego użycia ReactDOM.render() tworzone są kolejne elementy, ale latwiejsza manipulacja nimi 
