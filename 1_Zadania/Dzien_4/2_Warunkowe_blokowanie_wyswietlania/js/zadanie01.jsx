import React from 'react';
import ReactDOM from 'react-dom';
import fakeAPI from './zadanie01';


document.addEventListener('DOMContentLoaded', function(){

    class AccountData extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                data: []
            }
        }

        componentDidMount() {
            fakeAPI.load().then( (data1) => {
                this.setState({data: data1})
            });
        }

        render() {
            let tableElements = this.state.data.map(el => {
                return <tr>
                    <td> {el.day} </td>
                    <td> {el.balance} </td>
                    <td> {el.change} </td>
                </tr>
            })

            if (!this.state.data.length){
                //jeżeli jest pusta
                return null;
            }
            else {
                return (
                    <table>
                        <thead>
                            <tr>
                                <td> day </td>
                                <td> balance </td>
                                <td> change </td>
                            </tr>
                        </thead>
                        <tbody>
                            {tableElements}
                        </tbody>
                    </table>
                )
            }
        }
    }

    class App extends React.Component {
        render() {
            return <div>
                <AccountData />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
