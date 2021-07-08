import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border-radius: 5px;
  border: solid 1px #333;
`;

const InputArea = styled.div`
  border-radius: 5px;
  border: solid 1px #333;
`;

const Input = styled.input`
  height: 25px;
  font-size: 20px;
  border-radius: 5px;
  border: solid 1px #333;
`;

const Output = styled.p`
  font-size: 21px;
`;

const App = () => {
  const [value, setValue] = useState('');

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <InputArea>
        <Input type='text' value={value} onChange={onChangeValue} />
      </InputArea>
      <Output>{value}</Output>
    </Wrapper>
  );
};

export default App;
