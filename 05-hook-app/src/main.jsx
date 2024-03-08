import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MultipleCustomHooks />
  //</React.StrictMode>,
)
