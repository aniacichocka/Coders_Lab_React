import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class MixedData extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                selected: 'Ananasy'
            }
        }

        handleChange = (event) =>{
            this.setState({
                selected: event.target.value
            })
        }

        handleSelectChange = (event) =>{
            this.setState({
                selected: event.target.value
            })
        }

        render(){

            return <div >
                <input value={this.state.selected} onChange={this.handleChange} />
                <select value={this.state.selected} onChange={this.handleSelectChange} >
                    <option value='Banany'>Banany</option>
                    <option value='Ananasy'>Ananasy</option>
                    <option value='Pomarańcze'>Pomarańcze</option>
                </select>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <MixedData />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
