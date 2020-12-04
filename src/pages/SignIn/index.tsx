import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { AiFillGithub } from 'react-icons/ai';
import { RiArrowRightLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import { Container, Input, Button, Error, InputContainer } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const [login, setLogin] = useState('');

  const handleSubmit = useCallback(
    async (username: string) => {
      try {
        setError('');

        const schema = Yup.string().required('Campo obrigatório');

        await schema.validate(username, { abortEarly: false });
        await signIn(username);
      } catch (err) {
        setError(err.message);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <AiFillGithub size={104} color="#FFCE00" />
      <InputContainer isFocused={isFocused} hasError={!!error}>
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Usuário"
          onChange={e => setLogin(e.target.value)}
        />
        {!!error && <Error>{error}</Error>}
      </InputContainer>
      <Button onClick={() => handleSubmit(login)}>
        ENTRAR
        <RiArrowRightLine size={28} />
      </Button>
    </Container>
  );
};

export default SignIn;
