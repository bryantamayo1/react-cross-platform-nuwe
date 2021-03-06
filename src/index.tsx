import React from 'react'
import ReactDOM from 'react-dom'
import { Dashboard } from './pages/Dashboard';
import 'normalize.css';
import "react-datepicker/dist/react-datepicker.css";
import './styles/index.css';
import './styles/dashboard.css';
import './styles/datePicker.css';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
)
