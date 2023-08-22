import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/index.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <Suspense fallback = {<div>Loading...</div>}>
    <RouterProvider router = {router}>
      <App/>
    </RouterProvider>
    </Suspense>
  
  </Provider>,
)
