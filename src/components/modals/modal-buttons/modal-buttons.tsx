import { Button } from '@mui/material';
import './modal-buttons.sass';

interface IModalButtons {
  /*
   * confirmation button text
   */
  okBtnText?: string;
  /*
   * cancel button text
   */
  cancelBtnText?: string;
  /*
   * modal close handler
   */
  onClose: () => void;
  /*
   * modal confirm handler
   */
  onConfirm: () => void;
  /*
   * disable confirm button
   */
  disableConfirm: boolean;
}

export const ModalButtons = ({
  okBtnText = 'Ok',
  cancelBtnText = 'Cancel',
  onClose,
  onConfirm,
  disableConfirm,
}: IModalButtons) => (
  <div className="buttons-modal">
    <Button variant="text" onClick={onClose}>
      {cancelBtnText}
    </Button>
    <Button variant="contained" color="primary" onClick={onConfirm} disabled={disableConfirm}>
      {okBtnText}
    </Button>
  </div>
);
