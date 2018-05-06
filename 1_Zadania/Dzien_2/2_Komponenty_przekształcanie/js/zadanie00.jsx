import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    function AddNumbers1(props){
        const sum = props.numberA + props.numberB;
        return <div>
            {sum}
        </div>
    }

    class AddNumbers extends React.Component {
        render(){
            return <div>{this.props.numberA + this.props.numberB}</div>
        }
    }

    function App1(props){
        return <div>
            <AddNumbers numberA={2} numberB={3} />
        </div>;
    }

    class App extends React.Component {
        render(){
            return <div>
                <AddNumbers numberA={2} numberB={3} />
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
