import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    // function Menu(){
    //     return (
    //         <div>
    //             <ul>
    //                 <li><a href = "/">Strona główna</a></li>
    //                 <li><a href = "blog">Blog</a></li>
    //                 <li><a href = "pricing">Cennik</a></li>
    //                 <li><a href = "contact">Kontakt</a></li>
    //             </ul>
    //         </div>
    //     )
    // }

    class Menu extends React.Component {
        render(){
            return (
                <div>
                    <ul>
                        <li><a href = "/">Strona główna</a></li>
                        <li><a href = "blog">Blog</a></li>
                        <li><a href = "pricing">Cennik</a></li>
                        <li><a href = "contact">Kontakt</a></li>
                    </ul>
                </div>
            )
        }
    }


    ReactDOM.render(
        <Menu />,
        document.getElementById('app')
    );
});
