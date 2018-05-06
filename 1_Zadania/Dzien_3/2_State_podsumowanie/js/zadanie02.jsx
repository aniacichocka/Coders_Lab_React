import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                colorDiv: 'white'
            }
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({colorDiv: this.props.onOff === true && this.state.colorDiv === 'white' ? this.props.color : 'white'})
            }, this.props.frequency)
        }

        componentWillUnmount() {
            clearInterval(intervalId)
        }

        render () {
            let style = {width: '500px', height: '50px', backgroundColor: this.state.colorDiv}
            return <div style={style}></div>
        }
    }

    class StrobeControl extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                onOff: true
            }
        }

        componentDidMount(){
            this.contrInterval = setInterval(() => {
                this.setState({onOff: false})
            }, 5000)
        }

        componentWillUnmount(){
            clearInterval(contrInterval);
        }

        render(){
            return (
                <div>
                    <StrobeLight color={'blue'} frequency={4000} onOff = {this.state.onOff}/>
                    <StrobeLight color={'green'} frequency={300} onOff = {this.state.onOff}/>
                    <StrobeLight color={'orange'} frequency={3000} onOff = {this.state.onOff}/>
                    <StrobeLight color={'yellow'} frequency={400} onOff = {this.state.onOff}/>
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return <StrobeControl />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
