import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Buttons extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                selected: -1
            }
        }

        handleClickBtn = (e,index) =>{
            this.setState({
                selected: index
            })
        }

        render(){
            let array = [];
            for (var i = 0; i < 15; i++) {
                array.push(i);
            }

            let buttons = array.map((e,index)=>{
                return <li key = {index}>
                    <button onClick={e => this.handleClickBtn(e,index)}> {this.state.selected === index ? 'Kliknięty!' : 'Klik!'}</button></li>
            })
            return <div>
                {buttons}
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Buttons />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
