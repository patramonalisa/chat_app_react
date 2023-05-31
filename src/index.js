import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AuthContext.Provider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </AuthContext.Provider>
  
  // document.getElementById('root')
);
