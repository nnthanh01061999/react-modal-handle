import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { withModalHandle, ModalContextProvider, useModalHandle } from '.././';
import ExampleModalFirst from './components/ExampleModalFirst';
import ExampleModalSecond from './components/ExampleModalSecond';

const ExampleModalFirstWithHandle = withModalHandle(
  ExampleModalFirst,
  'example-modal-1'
);
const ExampleModalSecondWithHandle = withModalHandle(
  ExampleModalSecond,
  'example-modal-2'
);

const App = () => {
  const { openModal } = useModalHandle();

  const onOpenModal1 = () => {
    openModal('example-modal-1');
  };

  const onOpenModal2 = () => {
    openModal('example-modal-2');
  };

  const onCloseCallback = () => {
    alert('Close modal 1');
  };

  return (
    <div>
      <button onClick={onOpenModal1}>Open Modal 1</button>
      <br />
      <button onClick={onOpenModal2}>Open Modal 2</button>
      <ExampleModalFirstWithHandle
        content={'Modal 1'}
        onCloseCallback={onCloseCallback}
      />
      <ExampleModalSecondWithHandle />
    </div>
  );
};

ReactDOM.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>,
  document.getElementById('root')
);
