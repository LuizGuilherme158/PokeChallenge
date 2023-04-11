import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import PokedexPage from './pages/PokedexPage';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './index.css';
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="/list" element={<PokedexPage />} /> 
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
