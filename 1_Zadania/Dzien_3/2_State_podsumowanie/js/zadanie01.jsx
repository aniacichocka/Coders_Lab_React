import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Clock extends React.Component{
        constructor(props){
            super(props);
            this.state= {
                date: new Date()
            }
        }
        componentDidMount(){
            this.intervalId = setInterval(()=>{
                this.setState({date: new Date()})
            }, 1000)
        }
        componentWillUnmount(){
            clearInterval(intervalId)
        }
        render(){
            return (
                <div>
                    <ClockTime date = {this.state.date}/>
                    <ClockDate date = {this.state.date}/>
                </div>
            )
        }
    }


    class ClockTime extends React.Component{
        render(){
            return (
                <div>
                    <ClockTimeHour time = {this.props.date}/>
                    <ClockTimeMinute time = {this.props.date}/>
                    <ClockTimeSecond time = {this.props.date}/>
                </div>
            )
        }
    }

    class ClockTimeHour extends React.Component{
        render(){
            return <h1>{this.props.time.getHours()}</h1>
        }
    }

    class ClockTimeMinute extends React.Component{
        render(){
            return <h1>{this.props.time.getMinutes()}</h1>
        }
    }

    class ClockTimeSecond extends React.Component{
        render(){
            return <h1>{this.props.time.getSeconds()}</h1>
        }
    }


    class ClockDate extends React.Component{
        render(){
            return (
                <div>
                    <ClockDateYear partDate = {this.props.date}/>
                    <ClockDateMonth partDate = {this.props.date}/>
                    <ClockDateDay partDate = {this.props.date}/>
                </div>
            )
        }
    }

    class ClockDateYear extends React.Component{
        render(){
            return <h1>{this.props.partDate.getFullYear()}</h1>
        }
    }

    class ClockDateMonth extends React.Component{
        render(){
            return <h1>{this.props.partDate.getMonth()+1}</h1>
        }
    }

    class ClockDateDay extends React.Component{
        render(){
            return <h1>{this.props.partDate.getDate()}</h1>
        }
    }

    class App extends React.Component {
        render() {
            return <Clock />
        }
    }

     ReactDOM.render(
         <App />,
         document.getElementById('app')
     );
});
