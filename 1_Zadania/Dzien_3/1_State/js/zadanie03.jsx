import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
         constructor(props) {
             super(props)
             this.state = {
                 colorDiv: 'white'
             }
         }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({colorDiv: this.state.colorDiv === 'white' ? this.props.color : 'white'})
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

    class App extends React.Component {
        render() {
            return <StrobeLight color={'red'} frequency={1000}/>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
 });

// document.addEventListener('DOMContentLoaded', function(){
//
//
//     class StrobeLight extends React.Component{
//         constructor(props){
//             super(props);
//             this.state = {
//                 barwa: this.props.color
//             }
//         }
//         componentDidMount(){
//             this.intervalId = setInterval(() =>{
//                 this.setState({
//                     barwa:this.state.barwa === "red" ? this.state.barwa: "blue" : this.state.barwa: "red"
//                 })
//             }, this.props.frequency)
//         }
//         render() {
//             let style = {
//                 width:'500px',
//                 height: '50px',
//                 backgroundColor: this.state.barwa
//             }
//             return <div style = {style}></div>
//         }
//     }
//
//     class App extends React.Component {
//         render() {
//             return <StrobeLight color={'red'} frequency={1000}/>
//         }
//     }
//
//      ReactDOM.render(
//          <App />,
//          document.getElementById('app')
//      );
// });
