import React from 'react';
import './App.css';
import SignIn from './SignIn';
import SignInSide from './SignInSide';
import Checkout from './Checkout';
import Pricing from './Pricing';
import Blog from './Blog';
import Dashboard from './Dashboard';
import SignUp from './SignUp';

function App() {
    return (
        <div className="App">
            <Dashboard />
            <hr />
            <SignIn />
            <hr />
            <SignInSide />
            <hr />
            <SignUp />
            <hr />
            <Checkout />
            <hr />
            <Pricing />
            <hr />
            <Blog />
            <hr />
        </div>
    );
}

export default App;
