import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Router>
        <App />
      </Router>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
