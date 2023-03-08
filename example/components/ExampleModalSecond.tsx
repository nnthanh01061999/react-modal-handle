import * as React from 'react';
import 'react-app-polyfill/ie11';
import { useModalHandle } from '../../.';
import { ModalHandleProps } from '../../.';
import '../styles/modal.css';

function ExampleModalSecond(props: ModalHandleProps) {
  const { onClose } = props;

  const { closeModal, closeAllModal } = useModalHandle();

  const onCloseModalWithoutCallback = () => {
    closeModal('example-modal-1', false);
  };

  const onCloseModalWithCallback = () => {
    closeModal('example-modal-1');
  };

  const onCloseAllModal = () => {
    closeAllModal();
  };

  return (
    <div className="modal">
      <div className="modal-content" style={{ width: '500px' }}>
        <button onClick={onClose} className="close">
          &times;
        </button>
        <h1>Modal Second</h1>
        <p>Nothing here</p>

        <button onClick={onCloseModalWithoutCallback}>
          Close Modal 1 without Callback
        </button>
        <button onClick={onCloseModalWithCallback}>
          Close Modal 1 with Callback
        </button>
        <button onClick={onCloseAllModal}>Close All Modal</button>
      </div>
    </div>
  );
}

export default ExampleModalSecond;
