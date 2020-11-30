import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';

import { AuthProvider } from './hooks/auth';

import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <Footer />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
