import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class ColorDiv extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                color: 'green'
            }
        }

        componentDidMount() {
            this.intervalId = setTimeout(() => {
               this.setState({color: 'red'})
           }, 5000)
        }

        componentWillUnmount() {
            clearTimeout(this.intervalId)
        }
        render () {
            let style = {
                width: '200px',
                height: '200px',
                backgroundColor: this.state.color
            }
            return <div style = {style}></div>
        }
    }

    ReactDOM.render(
        <ColorDiv />,
        document.getElementById('app')
    );
});
