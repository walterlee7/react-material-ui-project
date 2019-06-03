import React from 'react';
import './App.css';
import SignIn from './SignIn';
import SignInSide from './SignInSide';
import Checkout from './Checkout';

function App() {
    return (
        <div className="App">
            <SignIn />
            <hr />
            <SignInSide />
            <hr />
            <Checkout />
            <hr />
        </div>
    );
}

export default App;
