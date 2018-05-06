import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // function Chat(props){
    //     return <div className="chat">
    //         <header>
    //             <h1>Chat prywatny</h1>
    //         </header>
    //         <div>
    //             <ul>
    //                 <li>Wpis z chatu 1</li>
    //                 <li>Wpis z chatu 2</li>
    //                 <li>Wpis z chatu 3</li>
    //             </ul>
    //         </div>
    //         <footer>
    //             <input type="text"/>
    //             <button>Wyślij</button>
    //         </footer>
    //     </div>
    // }
    //
    // function App(props){
    //     return <div>
    //         <Chat />
    //     </div>;
    // }


   //  let messages = ['Wpis z chatu 1', 'Wpis z chatu 2', 'Wpis z chatu 3']
   //
   // function Chat(props){
   //     return <div className="chat">
   //        <ChatHeader />
   //        <ChatMessages messages={props.messages} />
   //     </div>
   // }
   //
   // function NewChatMessage(props) {
   //     return  <footer>
   //         <input type="text"/>
   //         <button>Wyślij</button>
   //     </footer>
   // }
   //
   // function ChatMessage(props) {
   //     return <li>{props.message}</li>
   // }
   //
   // function ChatMessages(props) {
   //     let listElements = props.messages.map(message => {
   //         return <ChatMessage message={message} />
   //     })
   //     return <ul>
   //         {listElements}
   //     </ul>
   // }
   //
   // function ChatHeader(props) {
   //     return  <header>
   //         <h1>Chat prywatny</h1>
   //     </header>
   // }
   //
   // function App(props){
   //     return <div>
   //         <Chat messages={messages}/>
   //     </div>;
   // }
   //
   // ReactDOM.render(
   //     <App/>,
   //     document.getElementById('app')
   // );

    let messages = ['Wpis z chatu 1', 'Wpis z chatu 2', 'Wpis z chatu 3']

    class Chat extends React.Component{
        render() {
            return (
                <div className="chat">
                    <ChatHeader />
                    <ChatMessages messages={this.props.messages} />
                    <NewChatMessage />
                </div>
            )
        }
    }

    class NewChatMessage extends React.Component {
        render() {
            return(
                <footer>
                   <input type="text"/>
                   <button>Wyślij</button>
               </footer>
            )
        }
    }

    class ChatMessage extends React.Component {
        render() {
            return <li>{this.props.message}</li>
        }
    }

    class ChatMessages extends React.Component {
        render(){
            let listElements = this.props.messages.map(message => {
                return <ChatMessage message={message} />
            })
            return <ul>
                {listElements}
            </ul>
        }
    }

    class ChatHeader extends React.Component {
        render() {
            return  (
                <header>
                    <h1>Chat prywatny</h1>
                </header>
            )
        }
    }

    class App extends React.Component{
        render() {
            return <div>
                <Chat messages={messages}/>
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
