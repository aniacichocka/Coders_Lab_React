import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component{
        handleOnClick = (e, text) => {
            if (typeof this.props.clickMethod === 'function') {
                this.props.clickMethod(text);
            }
            e.preventDefault()
        }

        render(){
            return <button onClick = {e => this.handleOnClick(e, 'Coders lab')}><a  href='http://www.onet.pl'>onet.pl</a></button>
        }
    }

    class App extends React.Component{
        handleClick = (text) =>{
            console.log(text)
        }
        render(){
            return <div>
                 <Box clickMethod = {this.handleClick}/>
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


// document.addEventListener('DOMContentLoaded', function(){
//
//     class Box extends React.Component {
//
//         handleClickButton=(e, text) =>{
//             e.preventDefault();
//             console.log(text);
//         }
//
//         render(){
//             return(
//                 <div>
//                     <button onClick = {e=> this.handleClickButton(e, 'hello')}>
//                         <a href = 'http://www.wp.pl'>wp.pl</a>
//                     </button>
//                 </div>
//             )
//         }
//     }
//
//     class App extends React.Component {
//         render(){
//             return <div>
//                 <Box />
//             </div>
//         }
//     }
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
