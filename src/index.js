import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
