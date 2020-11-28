import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
