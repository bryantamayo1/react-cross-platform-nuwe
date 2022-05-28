import React from 'react'
import ReactDOM from 'react-dom'
import { Dashboard } from './pages/Dashboard';
import 'normalize.css';
import './styles/index.css';
import './styles/dashboard.css';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
)
