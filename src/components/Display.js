import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn';
import SignInSide from './SignInSide';
import Checkout from './Checkout';
import Pricing from './Pricing';
import Blog from './Blog';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Album from './Album';

class Display extends React.Component {

    handleClick(num) {
        console.log('click');
        if (num === 1) {
            ReactDOM.render(<Album />, document.getElementById('layout-here'));
        }
        else if (num === 2) {
            ReactDOM.render(<Blog />, document.getElementById('layout-here'));
        }
        else if (num === 3) {
            ReactDOM.render(<Checkout />, document.getElementById('layout-here'));
        }
        else if (num === 4) {
            ReactDOM.render(<Dashboard />, document.getElementById('layout-here'));
        }
        else if (num === 5) {
            ReactDOM.render(<Pricing />, document.getElementById('layout-here'));
        }
        else if (num === 6) {
            ReactDOM.render(<SignIn />, document.getElementById('layout-here'));
        }
        else if (num === 7) {
            ReactDOM.render(<SignInSide />, document.getElementById('layout-here'));
        }
        else if (num === 8) {
            ReactDOM.render(<SignUp />, document.getElementById('layout-here'));
        }
        else {
            alert('Layout Error');
        }

    }

    render() {
        return (
            <div className="layouts" >
                <div className="top-title">React Material UI Layouts</div>
                <div>
                    <div className="button-layouts">
                        <button id="ui-button" onClick={() => this.handleClick(1)}>Album</button>
                        <button id="ui-button" onClick={() => this.handleClick(2)}>Blog</button>
                        <button id="ui-button" onClick={() => this.handleClick(3)}>Checkout</button>
                        <button id="ui-button" onClick={() => this.handleClick(4)}>Dashboard</button>
                        <button id="ui-button" onClick={() => this.handleClick(5)}>Pricing</button>
                        <button id="ui-button" onClick={() => this.handleClick(6)}>Sign In</button>
                        <button id="ui-button" onClick={() => this.handleClick(7)}>Sign In Side</button>
                        <button id="ui-button" onClick={() => this.handleClick(8)}>Sign Up</button>

                    </div>
                </div>
                <div className="layout">
                    <div id="layout-here">
                        Layout will display here.
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;
