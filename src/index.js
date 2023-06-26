import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './components/CardList';
import reportWebVitals from './reportWebVitals';
import { robots } from './constants/robots';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className='flex flex-col items-center'>
      <div className='my-1 h-1 w-full bg-gray-700'> </div>
      <CardList robots={robots}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
