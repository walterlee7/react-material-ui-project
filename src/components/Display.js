import React from 'react';
import SignIn from './SignIn';
import SignInSide from './SignInSide';
import Checkout from './Checkout';
import Pricing from './Pricing';
import Blog from './Blog';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Album from './Album';

function Display() {
    return (
        <div className="layouts">
            <div className="title">React Material UI Layouts</div>
            <div>
                <div className="button-layouts">
                    <button>Dashboard</button>
                    <button>Sign In</button>
                    <button>Sign In Side</button>
                    <button>Checkout</button>
                    <button>Pricing</button>
                    <button>Blog</button>
                    <button>Sign Up</button>
                    <button>Album</button>
                </div>
            </div>
            <div className="layout">
                <div>
                    where Layout will display onClick
                </div>
            </div>

            {/* <Dashboard />
            <hr />
            <SignIn />
            <hr />
            <SignInSide />
            <hr />
            <SignUp />
            <hr />
            <Checkout />
            <hr />
            <Album />
            <hr />
            <Pricing />
            <hr />
            <Blog />
            <hr /> */}
        </div>
    );
}

export default Display;
