import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShowInfo extends React.Component{
        render(){
            return <div>
                <h1>{this.props.info}</h1>
            </div>
        }
    }

    class PropsToState extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                text: this.props.text
            }
        }
        componentDidMount(){
            this.intervalId = setInterval(()=>{
                this.setState({
                    text: this.state.text.concat('.')
                })
            },1000)
        }
        componentWillUnmount(){
            clearInterval(this.intervalId)
        }
        render(){
            return <div>
                <ShowInfo info = {this.state.text} />
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <PropsToState text = {'Hello'}/>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
