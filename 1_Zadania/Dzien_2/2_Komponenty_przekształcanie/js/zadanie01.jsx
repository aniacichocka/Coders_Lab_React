import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function CurrencyConverter1(props){
        const {fromCurr,toCurr,fromVal,convRate} = props;
        const toVal = fromVal * convRate;
        return <div>
            <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt; <strong>{toVal.toFixed(2)}</strong> {toCurr}
        </div>
    }


    class CurrencyConverter extends React.Component {
        render() {
            const {fromCurr,toCurr,fromVal,convRate} = this.props;
            const toVal = fromVal * convRate;
            return <div>
                 <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt; <strong>{toVal.toFixed(2)}</strong> {toCurr}
            </div>
        }
    }

    function App1(props){
        return <div>
            <CurrencyConverter1 fromCurr="PLN" toCurr="EUR" fromVal={250} convRate={0.25} />
            <CurrencyConverter1 fromCurr="EUR" toCurr="EUR" fromVal={120} convRate={4} />
            <CurrencyConverter1 fromCurr="USD" toCurr="EUR" fromVal={1000} convRate={0.94} />
        </div>;
    }


    class App extends React.Component {
        render() {
            return <div>
            <CurrencyConverter fromCurr="PLN" toCurr="EUR" fromVal={250} convRate={0.25} />
            <CurrencyConverter fromCurr="EUR" toCurr="EUR" fromVal={120} convRate={4} />
            <CurrencyConverter fromCurr="USD" toCurr="EUR" fromVal={1000} convRate={0.94} />
            </div>;
        }
   }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
