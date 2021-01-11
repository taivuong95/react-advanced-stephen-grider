import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';



it('renders withou crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there');

  ReactDOM.unmountComponentAtNode(div);
})
