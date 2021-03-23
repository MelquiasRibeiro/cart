import React from 'react'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
      />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
