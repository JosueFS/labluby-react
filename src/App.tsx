import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';

import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <Footer />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
