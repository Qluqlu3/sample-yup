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
    },
  });

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
          <button>console.log</button>
        </form>
      </div>
    </div>
  );
};
