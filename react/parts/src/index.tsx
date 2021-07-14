import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './index.css';
import { TextField } from './components/TextField';
import { ScaleBar } from './components/ScaleBar';
import reportWebVitals from './reportWebVitals';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
`;

ReactDOM.render(
  <Wrapper>
    <TextField />
    <ScaleBar maxValue={100} minValue={0} value={0} onChange={() => {}} />
  </Wrapper>,
  document.getElementById('root')
);

reportWebVitals();
