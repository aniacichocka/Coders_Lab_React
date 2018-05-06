import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){
    class ReceiptHeader extends React.Component {
        render() {
            return  (
                <thead>
                    <tr>
                        <th> Nazwa </th>
                        <th> Cena/1 </th>
                        <th> Ilość </th>
                        <th> Łączna cena </th>
                    </tr>
                </thead>
            )
        }
    }

    class ReceiptItem extends React.Component {
        render() {
            return (
                <tr>
                    <td>{this.props.item.name}</td>
                    <td>{this.props.item.price}</td>
                    <td>{this.props.item.count}</td>
                    <td>{this.props.item.price * this.props.item.count}</td>
                </tr>
            )
        }
    }

    class ReceiptItems extends React.Component {
        render() {
            let tableItems = this.props.items.map(item => {
                return <ReceiptItem item={item} />
            })

           return <div>{tableItems}</div>
        }
    }

    class ReceiptFooter extends React.Component {
        render() {
            let sum = this.props.items.reduce((init, item) => {
                return init = init + (item.price * item.count)
            }, 0)
            return (
                <tr>
                    <td> Razem </td>
                    <td> - </td>
                    <td> - </td>
                    <td> {sum} </td>
                </tr>
            )
        }
    }

    class Receipt extends React.Component {
        render() {
            return <table>
                <ReceiptHeader />
                <tbody>
                    <ReceiptItems items={this.props.items} />
                    <ReceiptFooter items={this.props.items} />
                </tbody>
            </table>
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                <Receipt items={this.props.items}/>
            </div>;
        }
    }

    ReactDOM.render(
        <App items={shopping}/>,
        document.getElementById('app')
    );
})
