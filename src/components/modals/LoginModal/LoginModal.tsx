import { ChangeEvent, useState, useEffect, useContext } from 'react';
import { TextField, Button } from '@mui/material';

import BaseModal from '../BaseModal/BaseModal';

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

const LoginModal = ({ isOpen, ...props }: ILoginModal) => {
  const LOGIN_TITLE = `Login`;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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

  const clearForm = () => {
    setLogin('');
    setPassword('');
  };

  useEffect(() => {
    if (!isOpen) {
      clearForm();
    }
  }, [isOpen]);

  const modalBody = (
    <div>
      <div className="input-modal">
        <TextField
          label="Login"
          name="login"
          autoComplete="off"
          fullWidth
          value={login}
          onChange={handleInput}
          // error={errors.loginError === true}
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
          // error={errors.loginError === true}
          required
        />
      </div>
    </div>
  );

  return (
    <BaseModal title={LOGIN_TITLE} isOpen={isOpen} onConfirm={() => {}} {...props}>
      {modalBody}
    </BaseModal>
  );
};

export default LoginModal;
