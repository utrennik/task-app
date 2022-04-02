import { ReactElement } from 'react';
import { Modal } from '@mui/material';
import { ModalButtons } from '../modal-buttons/modal-buttons';
import './BaseModal.sass';

interface IBaseModal {
  /*
   * state of the modal window
   */
  isOpen: boolean;
  /*
   * modal close handler
   */
  onClose: () => void;
  /*
   * modal confirm handler
   */
  onConfirm: () => void;
  /*
   * modal title
   */
  title: string;
  /*
   * modal content
   */
  children: ReactElement;
}

const BaseModal = ({ isOpen, title, onClose, onConfirm, children, ...other }: IBaseModal) => (
  <Modal open={isOpen} onClose={onClose} {...other}>
    <div className="body-modal">
      <div className="header-modal">{title}</div>
      <div className="content-modal">
        {children}
        <ModalButtons onClose={onClose} onConfirm={onConfirm} disableConfirm={false} />
      </div>
    </div>
  </Modal>
);

export default BaseModal;
