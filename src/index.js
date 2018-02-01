import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';
import topReducer from './reducers';
import { initialState } from './reducers/initialState';

let store = createStore(topReducer, initialState);

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
