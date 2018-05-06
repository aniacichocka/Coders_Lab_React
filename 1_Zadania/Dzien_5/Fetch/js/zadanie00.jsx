import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch(adres url)
        .then
    }
    render(){
        let list = this.state.data.map(el =>{
            return <div>el.title</div>
        })
        return <div>{list}</div>
    }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


// jslint
