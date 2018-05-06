import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
   class Invites extends React.Component{
       constructor(props){
           super(props)

          this.state ={
              people: []
          }
       }

       handleClick = () =>{
           let name = prompt('Podaj imie i nazwisko');

           if(!this.state.people.includes(name)){
            let tempArr = this.state.people;
            tempArr.unshift(name);

               this.setState({
                   people: tempArr
               })
           }
       }

       render(){
           let list = this.state.people.map((person, index) =>{
               return <li key={index}>{person}</li>
           })

           return <div>
               <button onClick={this.handleClick}>Nowy</button>
               <ul>
                    {list}
                </ul>
            </div>
       }
   }

   class App extends React.Component{
       render(){
           return <div>
                <Invites />
           </div>
       }
   }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


// w konsoli ['ania', 'kasia'].includes ('ania') true
// jak nie ma to zwróci false
