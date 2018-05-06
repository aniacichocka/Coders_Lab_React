import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class TyperText extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: this.props.text,
                displayText: '',
                counter: 1
            }
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({
                 displayText: this.state.text.slice(0, this.state.counter),counter: this.state.counter + 1})
            }, 1000)
        }

        componentWillUnmount() {
            clearInterval(this.intervalId)
        }

        render () {
            return <div>{this.state.displayText}</div>
        }
    }

    class App extends React.Component {
        render() {
            return <TyperText text={'Witaj!'}/>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
