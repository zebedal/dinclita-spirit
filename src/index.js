import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <HashRouter basename="/dinclita-spirit">
        <App />
      </HashRouter>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
