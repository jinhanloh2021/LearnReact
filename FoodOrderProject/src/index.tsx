import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//BUG: strictMode cause the reducer function to execute twice
root.render(<App />);
