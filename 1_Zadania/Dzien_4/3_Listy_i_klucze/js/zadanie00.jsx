import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00';

document.addEventListener('DOMContentLoaded', function(){

    class PeopleList extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            let list = people.map(person =>{
                return <li key = {person.pesel}>{person.name}</li>
            })
            return <div>
                {list}
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <PeopleList />
        }

    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
