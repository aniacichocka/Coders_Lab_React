import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function LikeBox1(props){
        return (
            <div>
                <span>{`${+props.likes}likes`}</span>
                <button>Lubię to</button>
            </div>
        )
    }

    class LikeBox extends React.Component {
       render(){
            return (
                <div>
                    <span>{this.props.likes}likes</span>
                    <button>Lubię to</button>
                </div>
            )
       }
    }

    ReactDOM.render(
        <LikeBox likes = "100"/>,
        document.getElementById('app')
    );
});
