import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class LifeCyclesTester  extends React.Component {

        componentWillReceiveProps(nextProps) {
            console.log(nextProps)
        }
        render () {
            return <div>{this.props.text}</div>
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                counter: 0
            }
        }
        
        componentDidMount() {
                this.intervalId = setInterval(() => {
                    this.setState({
                    counter: this.state.counter + 1
                })
            }, 3000)
        }

        componentWillUnmount() {
            clearInterval(this.intervalId)
        }

        render() {
            return <LifeCyclesTester text={this.state.counter}/>
        }
   }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
