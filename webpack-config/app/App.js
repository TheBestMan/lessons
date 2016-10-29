import React, {Component} from 'react';
import Greeter from './Greeter'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>mime title</h1>
                To get started, edit <code>src/App.js</code> and save to reload.
                <Greeter />
            </div>
        );
    }
}

export default App;
