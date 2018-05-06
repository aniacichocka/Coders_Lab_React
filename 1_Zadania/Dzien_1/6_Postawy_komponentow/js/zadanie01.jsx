import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let numberLikes = 100;

    // function LikeBox(){
    //     return (
    //         <div>
    //            <span>{numberLikes}likes</span>
    //            <button>Lubię to</button>
    //         </div>
    //     )
    // }

    class LikeBox extends React.Component {
        render(){
            return (
                <div>
                   <span>{numberLikes}likes</span>
                   <button>Lubię to</button>
                </div>
            )
       }
    }

    ReactDOM.render(
        <LikeBox />,
        document.getElementById('app')
    );

});
