import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ProductTriangle extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                color1: 'grey',
                color2: 'grey',
                color3: 'grey',
                list: []
            }
        }
        handleClick1 = ()=>{
            let newList = this.state.list;
            this.setState({
                color1: this.state.color1 === 'grey'? 'green': 'grey',
                list: newList
            }, (

                newList.push(this.state.color1)
            ))

            if(this.state.list[2].length > 2){
                newList.shift();
            }
        }

        handleClick2 = ()=>{
            let newList = this.state.list;
            this.setState({
                color2: this.state.color2 === 'grey' ? 'green': 'grey',
                list: newList
            }, (
                newList.push(this.state.color2)
            ));

            if(this.state.list[2].length > 2){
                newList.shift();
            }
        }

        handleClick3 = ()=>{
            let newList = this.state.list;
            this.setState({
                color3: this.state.color3 === 'grey' ? 'green': 'grey',
                list: newList
            }, (
                newList.push(this.state.color3)
            ))
            if(this.state.list.length === 3){
                let item = this.state.list.splice(0,1);

                if(this.state.list[2].length > 2){
                    newList.shift();
                }
            }
        }



        render(){
console.log(this.state.list);
            return <div>
                <button style = {{backgroundColor: this.state.color1}} onClick = {this.handleClick1}>Dobrze</button>
                <button style = {{backgroundColor: this.state.color2}} onClick = {this.handleClick2}>Szybko</button>
                <button style = {{backgroundColor: this.state.color3}} onClick = {this.handleClick3}>Tanio</button>

            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <ProductTriangle />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
