import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){
   class Receipt extends React.Component {
       render() {
           let tableItems = this.props.items.map(item => {
               return <tr>
                   <td>{item.name}</td>
                   <td>{item.price}</td>
                   <td>{item.count}</td>
                   <td>{item.price * item.count}</td>
               </tr>
           })

           let sum = this.props.items.reduce((acc, item) => {
               return acc = acc + (item.price * item.count)
           }, 0)

           return (
               <table>
                   <thead>
                        <tr>
                            <th> Nazwa </th>
                            <th> Cena/1 </th>
                            <th> Ilość </th>
                            <th> Łączna cena </th>
                        </tr>
                   </thead>
                    <tbody>
                        {tableItems}
                        <tr>
                            <td> Razem </td>
                            <td> - </td>
                            <td> - </td>
                            <td> {sum} </td>
                        </tr>
                    </tbody>
                </table>
           )
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
});
