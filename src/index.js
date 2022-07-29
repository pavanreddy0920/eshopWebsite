import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initialState } from './state/reducer';
import { StateProvider } from './state/stateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
