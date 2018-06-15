import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
