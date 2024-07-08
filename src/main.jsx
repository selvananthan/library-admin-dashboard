import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import { LibraryProvider } from './context/LibraryContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <AppRouter />
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
