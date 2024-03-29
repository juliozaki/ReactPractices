import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
//import { GridApp } from './20-grid/GridApp';
//import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Memorize } from './06-memos/Memorize';
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  //</React.StrictMode>,
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
