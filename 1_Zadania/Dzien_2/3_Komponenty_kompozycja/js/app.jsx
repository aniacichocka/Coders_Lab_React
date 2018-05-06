import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let dataFromServer = {
        title: "To jest tytul",
        image: './img/zadanie02.png',
        price: '$13',
        description: 'opis produktu'
    }

    class App extends React.Component {
        render(){
            return (
                <ShopItem data={dataFromServer}/>
            )
        }
    }


    class ShopItem extends React.Component {
        render(){
            return (
                <div>
                    <ShopItemHeader title={this.props.data.title} image = {this.props.data.image} />
                    <ShopItemDescription description = {this.props.data.description}/>
                    <ShopItemPricing price = {this.props.data.price}/>
                </div>
            )
        }
    }


    class ShopItemHeader extends React.Component {
        render(){
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.image} />
                </div>
            )
        }
    }


    class ShopItemDescription extends React.Component {
        render(){
            return (
                <article>
                    <p>{this.props.description}</p>
                </article>
            )
        }
    }

    class ShopItemPricing extends React.Component {
        render(){
            return (
                <div>
                    Cena: {this.props.price}
                    <button>Kup!</button>
                </div>
            )
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
