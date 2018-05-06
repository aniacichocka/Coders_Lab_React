import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    // function Search(){
    //     return (
    //         <div>
    //             <input />
    //             <button>Wyszukaj</button>
    //         </div>
    //     )
    // }

     class Search extends React.Component {
        render(){
            return (
                <div>
                    <input />
                    <button>Wyszukaj</button>
                </div>
            )
        }
     }


    ReactDOM.render(
        <Search />,
        document.getElementById('app')
    );
});
