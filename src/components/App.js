import React from 'react';
import './App.css';
import SignIn from './SignIn';
import SignInSide from './SignInSide';

function App() {
    return (
        <div className="App">
            <SignIn />
            <hr />
            <SignInSide />
            <hr />
        </div>
    );
}

export default App;
