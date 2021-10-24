import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

interface Props {}

type FormState = {
  name: string;
};

export const App: React.FC<Props> = () => {
  const { register, handleSubmit, reset } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 0,
    },
  });

  const numberRegExp = /^[0-9]+$/;

  const onSubmit = handleSubmit((data: FormState) => {
    console.log(data);
  });

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label>名前</label>
          <input
            type='text'
            name='name'
            placeholder='名前'
            ref={register({
              required: '必須項目',
              maxLength: {
                value: 10,
                message: '20文字以内',
              },
            })}
          />
          <label>年齢</label>
          <input
            type='number'
            name='age'
            placeholder='年齢'
            ref={register({
              valueAsNumber: true,
              required: '必須項目',
              pattern: {
                value: numberRegExp,
                message: '整数で入力',
              },
              min: {
                value: 0,
                message: '0以上の数字',
              },
              max: {
                value: 130,
                message: '130以下の数字',
              },
            })}
          />
          <button>console.log</button>
        </form>
      </div>
    </div>
  );
};
