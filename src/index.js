import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FEATURES from './components/STORE';



ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
