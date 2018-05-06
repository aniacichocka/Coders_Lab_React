import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Switch extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                blockedItem: -1
            }
        }

        handleClick = (e, index) =>{
            this.setState({
                blockedItem: index
            })
        }

        render(){
            var list = [];

            for(let i=0; i<this.props.count; i++){
                    list.push(
                        <li key={i}>
                            <button onClick={e => this.handleClick(e,i)} disabled={i === this.state.blockedItem ? true: false}>{i}
                            </button>
                        </li>
                    )
            }

            return <div >
                <ul>
                    {list}
                </ul>
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Switch count={10} />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
