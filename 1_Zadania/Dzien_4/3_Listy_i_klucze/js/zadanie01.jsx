import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie01';

document.addEventListener('DOMContentLoaded', function(){

    class PeopleList2 extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                people: people
            }
        }

        reverseArray = () =>{
            this.setState({
                people:this.state.people.reverse()
            })
        }

        render(){
            let list = people.map(person =>{
                return <li key = {person.email}>{person.name}</li>
            })
            return (
                <div>
                    <ul>
                        {list}
                    </ul>
                    <button onClick ={this.reverseArray} >reverse</button>
                </div>
            )
        }
    }

    class App extends React.Component{
        render(){
            return <PeopleList2 />
        }

    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
