import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import './index.css';



const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root'));