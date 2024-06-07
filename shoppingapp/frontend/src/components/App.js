import React, {Component, component} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


class App extends Component{
    render(){
        return <h1>React Django</h1>
    }
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);