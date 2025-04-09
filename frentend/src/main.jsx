import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Reduxtool/Store.jsx';
import { Provider } from 'react-redux';
import Contex from './Contex.jsx';

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <Contex>
      <App />
    </Contex>
        
  </Provider>
)
