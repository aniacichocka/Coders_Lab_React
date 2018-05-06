import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    class ShopItem extends React.Component{
        handleClick = () =>{
            if( typeof this.props.onBuy === 'function') {
                this.props.onBuy(this.props.title)
            }
        }

        render(){
            return <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Buy</button>
            </div>
        }
    }

   class Shop extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                doneItems: []
            }
        }

        onBuy = (title) =>{
            this.setState({
                doneItems: this.state.doneItems.concat(title)
            })
        }

        render(){
            let list = this.state.doneItems.map(el => {
            return <li>{el}</li>
        })

        return <div>
            <ShopItem onBuy={this.onBuy} title="skarpetki" />
            <ShopItem onBuy={this.onBuy} title="koszula" />
            <ShopItem onBuy={this.onBuy} title="pończochy" />
            <ul>
                {list}
            </ul>
        </div>
       }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Shop />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
