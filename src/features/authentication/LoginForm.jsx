import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import SpinnerMini from '../../ui/SpinnerMini';

import { useLogin } from './useLogin';
import { useUser } from './useUser';
import Spinner from '../../ui/Spinner';
import FullPage from '../../ui/FullPage';

function LoginForm() {
  const [email, setEmail] = useState('irina@example.com');
  const [password, setPassword] = useState('irina123');
  const { login, isLoading } = useLogin();
  const { isAuthenticated, isLoading: isLoadingAuth } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) navigate('/dashboard', { replace: true });
    },
    [isAuthenticated, navigate]
  );

  if (isLoadingAuth)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        }
      }
    );
  }

  return (
    <>
      {!isLoadingAuth && (
        <Form onSubmit={handleSubmit}>
          <FormRowVertical label="Email address">
            <Input
              type="email"
              id="email"
              // This makes this form better for password managers
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </FormRowVertical>
          <FormRowVertical label="Password">
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </FormRowVertical>
          <FormRowVertical>
            <Button size="large" disabled={isLoading}>
              {!isLoading ? 'Login' : <SpinnerMini />}
            </Button>
          </FormRowVertical>
        </Form>
      )}
    </>
  );
}

export default LoginForm;
