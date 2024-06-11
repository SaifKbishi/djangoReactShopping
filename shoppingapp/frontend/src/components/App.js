import React, {Component, component} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
var HtmlWebpackPlugin = require('html-webpack-plugin');


class App extends Component{
    render(){
        return (
            <div id="app2" className="App">
                <h2>Hi, I am a Car!</h2>
            </div>
        );
    }
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
