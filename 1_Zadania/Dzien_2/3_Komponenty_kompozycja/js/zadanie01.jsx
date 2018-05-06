import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let dataFromServer = [
            {
                title   :   'Mysz komputerowa',
                image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
            },
            {
                title   :   'Klawiatura',
                image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
            },
            {
                title   :   'Laptop programisty',
                image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
            }
        ]


    class App extends React.Component {
        render(){
            return (
                <ShopList data = {dataFromServer}/>
            )
        }
    }


    class ShopList extends React.Component {
        render(){
            return (
                <div className='shoplist'>
                    <ShopItemHeader array = {this.props.data} />
                </div>
            )
        }
    }


    class ShopItemHeader extends React.Component {
        render(){
            let element = this.props.array.map(element =>{
                return(
                    <div key = {element.title}>
                        <h1>{element.title}</h1>
                        <img src = {element.image}/>
                    </div>
                )
            })
            return <section>{element}</section>
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
