import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class LifeCyclesTester extends React.Component {
        constructor(props){
            super(props)
            console.log('konstruktor');
        }
        componentWillReceiveProps(nextProps){
            console.log('componentWillReceiveProps', nextProps);
        }
        componentWillMount(){
            console.log('komponent będzie zamontowany');
        }
        componentDidMount(){
            console.log('komponent został zamontowany');
        }
        componentWillUnmount(){
            console.log('komponent odmontowany');
        }
        render(){
            console.log('renderowanie');
            return <div>Test</div>
        }
    }

    ReactDOM.render(
        <LifeCyclesTester />,
        document.getElementById('app')
    );
});
