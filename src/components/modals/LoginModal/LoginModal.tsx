import { ChangeEvent, useState, useEffect } from 'react';
import { TextField } from '@mui/material';

import BaseModal from '../BaseModal/BaseModal';
import { IValidationError } from '../../models/types';
import './LoginModal.sass';

interface ILoginModal {
  /*
   * state of the modal window
   */
  isOpen: boolean;
  /*
   * modal close handler
   */
  onClose: () => void;
}

interface ILoginModalErrors {
  /*
   * Login error
   */
  loginError?: IValidationError;
  /*
   * Password error
   */
  passwordError?: IValidationError;
}

const LoginModal = ({ isOpen, ...props }: ILoginModal) => {
  const LOGIN_TITLE = `Sign in`;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as ILoginModalErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'login': {
        setLogin(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default:
        return;
    }
  };

  const validate = () => {
    if (password === '') {
      setErrors((errors) => ({ ...errors, passwordError: { message: 'Password is required' } }));
    } else {
      setErrors((newErrors) => ({ ...newErrors, passwordError: undefined }));
    }

    if (login === '') {
      setErrors((errors) => ({ ...errors, loginError: { message: 'Login is required' } }));
    } else {
      setErrors((newErrors) => ({ ...newErrors, loginError: undefined }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (errors.loginError || errors.passwordError) return;
    console.log('LOGIN SUCCESS');
  };

  const clearForm = () => {
    setLogin('');
    setPassword('');
    setErrors({});
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (!isOpen) {
      clearForm();
    }
  }, [isOpen]);

  useEffect(() => {
    validate();
  }, [login, password]);

  const modalBody = (
    <>
      <p className="modal-text">Please enter your credentials:</p>
      <div className="input-modal-inputs">
        <div className="input-modal">
          <TextField
            label="Login"
            name="login"
            autoComplete="off"
            fullWidth
            value={login}
            onChange={handleInput}
            error={isSubmitted && !!errors.loginError}
            helperText={isSubmitted && errors.loginError?.message}
            required
          />
        </div>

        <div className="input-modal">
          <TextField
            label="Password"
            name="password"
            type={'password'}
            autoComplete="off"
            fullWidth
            value={password}
            onChange={handleInput}
            error={isSubmitted && !!errors.passwordError}
            helperText={isSubmitted && errors.passwordError?.message}
            required
          />
        </div>
      </div>
    </>
  );

  return (
    <BaseModal
      title={LOGIN_TITLE}
      isOpen={isOpen}
      okBtnText="Sign in"
      onConfirm={handleSubmit}
      {...props}
    >
      {modalBody}
    </BaseModal>
  );
};

export default LoginModal;
