import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberRandomInfo extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                number: 0
            }
        }

        componentDidMount(){
            this.intervalId = setInterval(() =>{
                this.setState({number: Math.ceil(Math.random() * 5 )})
            }, 1000)
        }

        componentWillUnount(){
            clearInterval(intervalId)
        }


        render(){
            let info;
            if(this.state.number > 3){
                info = this.state.number + " Większa od 3";
            }else if (this.state.number < 3){
                info = this.state.number + " Mniejsza  od 3";
            }else if (this.state.number === 3)
                info = this.state.number + " Równa 3";

            return <div>
                {info}
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <NumberRandomInfo />
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});




//
// document.addEventListener('DOMContentLoaded', function(){
//    class NumberRandomInfo extends React.Component {
//        constructor(props) {
//             super(props)
//
//             this.state = {
//                 number: 0
//             }
//        }
//
//        componentDidMount() {
//            this.intervalId = setInterval(() => {
//                this.setState({
//                    number: Math.ceil(Math.random() * 5 )
//                })
//            },1000)
//        }
//
//        componentWillUnmount() {
//            clearInterval(this.intervalId)
//        }
//
//        render () {
//            return <div>{
//             this.state.number > 3 ?
//                 `Większa od 3 - ${this.state.number}` :
//                 `mniejsza rowna od 3 - ${this.state.number}`
//            }</div>
//        }
//    }
//
//    class App extends React.Component {
//        render() {
//            return <div>
//                 <NumberRandomInfo />
//            </div>
//        }
//    }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
