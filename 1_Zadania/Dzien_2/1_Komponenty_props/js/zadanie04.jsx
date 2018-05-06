import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let data = [
        {
            urL     :   '/',
            text    :   'Strona główna'
        },
        {
            urL     :   '/blog',
            text    :   'Blog'
        },
        {
            urL     :   '/pricing',
            text    :   'Cennik'
        },
        {
            urL     :   '/contact',
            text    :   'Kontakt'
        }
    ];

    function Menu(props){
        let listElements = props.data.map(el => {
            return <li key={el.urL}><a href = {el.urL}>{el.text}</a></li>
        })

        return (
            <div>
                <ul>
                    {listElements}
                </ul>
            </div>
        )
    }

    class Menu1 extends React.Component {
        render(){
            let listElements = props.data.map(el => {
                return <li key={el.urL}><a href = {el.urL}>{el.text}</a></li>
            })
            return (
                <div>
                    <ul>
                        {listElements}
                    </ul>
                </div>
            )
        }
    }

    ReactDOM.render(
        <Menu data={data} />,
        document.getElementById('app')
    );

});
