import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let person = {
        name: 'Kasia',
        surname: 'Kowalska',
        title: 'Writer',
        email: 'kasiakowalska@example.com',
        tel: '123-456-789'
    }

    // function CardGenerator(props){
    //     return (
    //         <div style = {{width: '300px'}}>
    //             <CardName data = {props.data}/>
    //             <CardSurname data = {props.data}/>
    //             <CardTitle data = {props.data}/>
    //             <hr />
    //             <CardEmail data = {props.data}/>
    //             <CardTel data = {props.data}/>
    //         </div>
    //     )
    // }
    //
    // function CardName(props){
    //     return <h1 style = {{textAlign:'center'}}>{props.data.name}</h1>
    // }
    //
    // function CardSurname(props){
    //     return <h1 style = {{textAlign:'center'}}>{props.data.surname}</h1>
    // }
    //
    // function CardTitle(props){
    //     return <h2 style = {{textAlign:'center'}}>{props.data.title}</h2>
    // }
    //
    // function CardEmail(props){
    //     return <h3 style = {{textAlign:'center'}}><a href = {props.data.email}>e-mail: {props.data.email}</a></h3>
    // }
    //
    // function CardTel(props){
    //     return <h3 style = {{textAlign:'center'}}><a href = {props.data.tel}>tel: {props.data.tel}</a></h3>
    // }
    //
    // function App(){
    //     return <CardGenerator data = {person} />
    // }




    class CardGenerator extends React.Component {
        constructor(props) {
            super(props);
        }
        render () {
            return (
                <div style = {{width: '300px'}}>
                    <CardName data = {this.props.data}/>
                    <CardSurname data = {this.props.data}/>
                    <CardTitle data = {this.props.data}/>
                    <hr />
                    <CardEmail data = {this.props.data}/>
                    <CardTel data = {this.props.data}/>
                </div>
            )
        }
    }

    class CardName extends React.Component{
        render(){
            return <h1 style = {{textAlign:'center'}}>{this.props.data.name}</h1>
        }
    }

    class CardSurname extends React.Component{
        render(){
            return <h1 style = {{textAlign:'center'}}>{this.props.data.surname}</h1>
        }
    }

    class CardTitle extends React.Component{
        render(){
            return <h2 style = {{textAlign:'center'}}>{this.props.data.title}</h2>
        }
    }

    class CardEmail extends React.Component{
        render(){
            return <h3 style = {{textAlign:'center'}}><a href = {this.props.data.email}>e-mail: {this.props.data.email}</a></h3>
        }
    }

    class CardTel extends React.Component{
        render(){
            return <h3 style = {{textAlign:'center'}}><a href = {this.props.data.tel}>tel: {this.props.data.tel}</a></h3>
        }
    }

    class App extends React.Component{
        render(){
            return <CardGenerator data = {person} />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
