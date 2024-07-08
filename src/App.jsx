import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/Books';
import Authors from './components/Authors';
import FrontPage from './components/FrontPage';
import LibraryProvider from './context/LibraryProvider';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <LibraryProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
        </Switch>
      </Router>
    </LibraryProvider>
  );
};

export default App;
