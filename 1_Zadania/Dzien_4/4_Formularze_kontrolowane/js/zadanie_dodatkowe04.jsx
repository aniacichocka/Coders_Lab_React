import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    
    class ToDoList extends React.Component{
        constructor (props){
            super(props)

            this.state = {
                items: [],
                newItem: ''
            }
        }

        addItem = (event) =>{
            let newItems = this.state.items;

            newItems.push({
                name: this.state.newItem,
                done: false
            })
            this.setState({
                items: newItems,
                newItem: ''
            })
        }

        handleChange = (event) =>{
            this.setState({
                newItem: event.target.value
            })
        }

        handleClick = (event, name) =>{
            let updatedItem = this.state.items;

            updatedItem.map(el => {
                if (el.name === name) {
                    el.done = !el.done;
                }
            })

            this.setState({
                items: updatedItem
            })
        }

        render(){
            let todos = this.state.items.map((todo, index) => {
                return <li key={index}
                        className={todo.done ? 'checked' : ''}
                        onClick={e => this.handleClick(e, todo.name)}
                        > {todo.name} </li>
            })


        return <div className="toDoList">
                <div className="header">
                    <h2>Lista rzeczy do zrobienia</h2>
                    <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
                    <button className="addBtn" onClick={this.addItem}>Dodaj</button>
                </div>

                <ul>
                   {todos}
                </ul>
            </div>
       }
   }

    class App extends React.Component{
        render(){
            return <ToDoList />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
