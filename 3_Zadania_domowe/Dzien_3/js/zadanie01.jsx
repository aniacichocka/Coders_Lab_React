// document.addEventListener('DOMContentLoaded', function(){
//     function UpperCaseText(props){
//         return <div>
//             {props.text.toUpperCase()}
//         </div>
//     }
//
//     function App(props){
//         return <div>
//             <UpperCaseText text="Ala ma kota!" />
//         </div>;
//     }
//
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('app')
//     );
// });


import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class UpperCaseText extends React.Component{
        render(){
            return <div>
                {this.props.text.toUpperCase()}
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <UpperCaseText text="Ala ma kota!" />
            </div>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
