// import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScaleBar } from './ScaleBar';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
`;

ReactDOM.render(
  <Wrapper>
    <App />
    <ScaleBar maxValue={100} minValue={0} value={0} onChange={() => {}} />
  </Wrapper>,
  document.getElementById('root')
);

reportWebVitals();