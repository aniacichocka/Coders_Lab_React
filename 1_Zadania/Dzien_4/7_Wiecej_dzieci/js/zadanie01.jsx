import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    
    class WebsiteTemplate extends React.Component{
        render(){
            return <div className="HolyGrail">
                    <header>{this.props.header}</header>
                    <div className="HolyGrail-body">
                    <main className="HolyGrail-content">{this.props.content}</main>
                    <nav className="HolyGrail-nav">{this.props.menu}</nav>
                    <aside className="HolyGrail-ads">{this.props.ad}</aside>
                </div>
                <footer>{this.props.footer}</footer>
            </div>
       }
   }

    class App extends React.Component{
        render(){
            return <div>
                    <WebsiteTemplate
                        header = {
                            <h1>Moja strona</h1>
                        }
                        content = {
                            <div>
                                <h1>Witaj na mojej stronie</h1>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                            </div>
                        }
                        menu = {
                            <ul>
                                <li>Strona główna</li>
                                <li>O mnie</li>
                                <li>Kontakt</li>
                            </ul>
                        }
                        ad = {
                            <div>Reklamy</div>
                        }
                        footer = {
                            <p>&copy; 2017 Coders Lab</p>
                        }
                    />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
