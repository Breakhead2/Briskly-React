import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { closeModal } from '../store/slices/modalSlice';
import { Button } from 'react-bootstrap';

function ErrorModal() {
  const show = useSelector((state) => state.modal.show);
  const message = useSelector((state) => state.modal.message);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Уведомление</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Понятно
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
