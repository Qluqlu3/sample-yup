import './App.css';
import * as yup from 'yup';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 200px;
  height: 30px;
`;

export const InputArea = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  });

  return (
    <Wrapper>
      <StyledForm>
        <input type='text' name='firstName' placeholder='First Name' />
      </StyledForm>
    </Wrapper>
  );
};
