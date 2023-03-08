import 'react-app-polyfill/ie11';
import * as React from 'react';
import '../styles/modal.css';
import { ModalHandleProps } from '../../.';
import { useModalHandle } from '../../.';

interface ExampleModalFirstProps extends ModalHandleProps {
  content: string;
}

function ExampleModalFirst(props: ExampleModalFirstProps) {
  const { content, onClose } = props;

  const { openModal } = useModalHandle();

  const onOpenModal = () => {
    openModal('example-modal-2');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close">
          &times;
        </button>
        <h1>Modal First</h1>
        <p>{content}</p>
        <button onClick={onOpenModal}>Open Modal 2</button>
      </div>
    </div>
  );
}

export default ExampleModalFirst;
