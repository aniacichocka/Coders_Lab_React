import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TrafiicLights extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                num: 1,
                color1: 'red',
                color2: 'black',
                color3: 'black',
                time: this.props.redTime
            }
        }
        componentDidMount(){
            this.intervalId1 = setInterval(()=>{
                if(this.state.num === 1){
                    this.setState({
                        color1: 'red',
                        color2: 'black',
                        num: 2,
                        time: this.props.yellowTime
                    })
                }else if (this.state.num === 2){
                    this.setState({
                        color2: 'yellow',
                        num: 3,
                        time: this.props.greenTime
                    })
                }else if (this.state.num === 3){
                    this.setState({
                        color1: 'black',
                        color2: 'black',
                        color3: 'green',
                        num: 4,
                        time: this.props.yellowTime
                    })
                }else{
                    this.setState({
                        color2: 'yellow',
                        color3: 'black',
                        num: 1,
                        time: this.props.redTime
                    })
                }
            },this.state.time)
        }

        comonentWillUnmount(){
            clearInterval(this.intervalId1)
        }
        render(){
            return <div>
                <div style = {{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: this.state.color1}}></div>
                <div style = {{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: this.state.color2}}></div>
                <div style = {{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: this.state.color3}}></div>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <TrafiicLights redTime = {2000} yellowTime = {5000} greenTime = {1000}/>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
