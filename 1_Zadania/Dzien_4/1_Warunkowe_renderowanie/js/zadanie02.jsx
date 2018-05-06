import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberInfo extends React.Component {

        isPrime = (num) => {
            if(num < 2) return false;
            for (var i = 2; i < num; i++) {
                if(num % i == 0)
                    return false;
            }
            return true;
        }

        render() {
            return <h1>{this.props.number}, {this.props.number % 2 === 0 ? 'parzysta' : 'nieparzysta'}, {this.isPrime(this.props.number) && 'liczba pierwsza'}, {this.props.number === 3 && 'liczba to 3'}
           </h1>
       }
   }

    class App extends React.Component {
        render() {
            return <div>
                <NumberInfo number={1} />
                <NumberInfo number={2} />
                <NumberInfo number={5} />
                <NumberInfo number={7} />
                <NumberInfo number={10} />
                <NumberInfo number={3} />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
