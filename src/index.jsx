import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello/Hello';

const App = () => <Hello />;

ReactDOM.render(<App />, document.getElementById('app'));

if (import.meta.hot) {
  import.meta.hot.accept();
}
