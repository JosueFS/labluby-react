import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';

import AppProvider from './hooks';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Header />
      <Routes />
      <Footer />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
