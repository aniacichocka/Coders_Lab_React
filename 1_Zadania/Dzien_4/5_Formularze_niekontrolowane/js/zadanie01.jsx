import React from 'react';
import ReactDOM from 'react-dom';

//wersja = formularz niekontrolowany

document.addEventListener('DOMContentLoaded', function(){

   class Sum extends React.Component{
       constructor(props){
           super(props)

          this.state = {
            items: []
          }
       }

       handleClick = () =>{
        let newItems = this.state.items;
        newItems.push(Number(this.input.value))

        this.input.value = '';

        this.setState({
            items: newItems
        })
       }


       render(){
           let list = this.state.items.map((el, index) => {
               return <li key={index}>{el}</li>
           })
           return <div>
               <input type="number" ref={input=>this.input=input}/>
               <button onClick={this.handleClick}>Dodaj</button>
               <h1>{this.state.items.reduce((acc, el) => {
                   return acc = acc + el
               }, 0)}</h1>
               <ul>
                   {list}
                </ul>
           </div>
       }
   }

   class App extends React.Component{
       render(){
            return <Sum  />
       }
   }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});

//wersja - formularz kontrolowany

// document.addEventListener('DOMContentLoaded', function(){
//
//     class Sum extends React.Component{
//         constructor(props) {
//             super(props)
//
//             this.state = {
//                 items: [],
//                 inputValue: ''
//             }
//         }
//
//         handleClick = () =>{
//             let newItems = this.state.items;
//             newItems.push(Number(this.state.inputValue))
//
//             this.setState({
//                 items: newItems,
//                 inputValue: ''
//             })
//         }
//
//         handleChange = (event) =>{
//             this.setState({
//                inputValue: event.target.value
//             })
//         }
//
//         render(){
//             let list = this.state.items.map((el, index) => {
//                 return <li key={index}>{el}</li>
//             })
//             return <div>
//                <input type="number" value={this.state.inputValue} onChange={this.handleChange}/>
//                <button onClick={this.handleClick}>Dodaj</button>
//                <h1>{this.state.items.reduce((acc, el) => {
//                    return acc = acc + el
//                }, 0)}</h1>
//                 <ul>
//                     {list}
//                 </ul>
//             </div>
//         }
//     }
//
//     class App extends React.Component{
//         render(){
//             return <Sum  />
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
