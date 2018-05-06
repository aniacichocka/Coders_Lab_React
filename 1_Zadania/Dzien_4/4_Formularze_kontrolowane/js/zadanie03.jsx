import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener('DOMContentLoaded', function(){
    class SelectOrType extends React.Component{
        constructor(props) {
            super(props)

            this.state = {
                selected: '',
                showInput: false,
                text: ''
            }
        }

        onSelectChange = (event) =>{
            if(event.target.value === 'inne') {
                this.setState({
                    showInput: true
                })
            }

            this.setState({
                selected: event.target.value
            })
        }

        handleChange = (event) =>{
            this.setState({
                text: event.target.value
            })
        }

        handleClick = () =>{
            this.setState({
                showInput: false
            })
        }

        render(){
            let options = this.props.items.map((el, index) =>{
                return  <option value={el} key={index}>{el} </option>
            })

            if (this.state.showInput){
                var input = <div>
                    <input type='text' value={this.state.text} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Change</button>
                  </div>
            }

            options.push(<option value='inne' key={this.props.items.length}>{this.state.text ? this.state.text : 'Inne' }</option>)

            return <div >
                <select value={this.state.selected} onChange={this.onSelectChange}>
                    {options}
                </select>
                {input}
            </div>
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                <SelectOrType items={['BMW', 'Jaguar', 'Porshe']}/>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
