import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class WhoIsPresent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                names: ['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'],
                name: '',
                newList: [],
            }
        }
        handleChange = (event)=>{
            this.setState({
                name: event.target.value
            })

            let list = this.state.newList;
            list.push(event.target.value);
            this.setState({
                newList: list
            })

            let newNamesList = this.state.names;
            let listSelect = newNamesList.filter(el=>{
                return el !== event.target.value
            })
            this.setState({
                names: listSelect
            })
        }

        render(){
            let options = this.state.names.map((el,index)=>{
                return <option key = {index} value= {el}>{el}</option>
            })
            let namesList = this.state.newList.map((el, index)=>{
                return <li key = {index}>{el}</li>
            })
            return <div>
                <select value = {this.state.name} onChange = {this.handleChange}>
                    {options}
                </select>
                <ul>
                    {namesList}
                </ul>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <WhoIsPresent />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
