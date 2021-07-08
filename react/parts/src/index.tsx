// import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #aaa;
`;

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
);

reportWebVitals();
