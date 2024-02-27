import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp, HelloWorldApp } from './HelloWorldApp';
import './styles.css';

//import moduleName, { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp title="Soy un PROP" numero={123} />
        <FirstApp />
    </React.StrictMode>
);