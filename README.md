# React Modal Handle

This package helps you to control the Modal, which one opens, which one closes and runs a callback when a modal is closed.

## Installation

Install react-modal-handle with npm or yarn

```bash
    npm install --save react-modal-handle
    yarn add react-modal-handle
```

## Usage/Examples

### App

```javascript
import ModalContextProvider from "react-modal-handle";
import Example from '@/components/Example'

export App() {
  return (
    <ModalContextProvider>
      <Example />
    </ModalContextProvider>
  );
}
```

### ModalA

```javascript
import { Button, Modal } from 'antd';
import React from 'react';
import { ModalHandleProps, useModalHandle } from 'react-modal-handle';

interface ModalAProps extends ModalHandleProps {
  content: string;
}

function ModalA(props: ModalAProps) {
  const { content, onClose } = props;

  const { openModal } = useModalHandle();

  return (
    <Modal
      title={'Modal A'}
      open={true}
      maskClosable={false}
      onCancel={onClose}
    >
      <p>{content}</p>
      <Button onClick={() => openModal('modal-b')}>Open Modal B</Button>
    </Modal>
  );
}

export default ModalA;
```

### ModalB

```javascript
import { Button, Modal } from 'antd';
import React from 'react';
import { ModalHandleProps, useModalHandle } from 'react-modal-handle';

function ModalB(props: ModalHandleProps) {
  const { onClose } = props;

  const { closeModal, closeAllModal } = useModalHandle();

  return (
    <Modal
      title={'Modal B'}
      open={true}
      maskClosable={false}
      onCancel={onClose}
    >
      <Button onClick={() => closeModal('modal-a')}>Close Modal A</Button>
      <Button onClick={() => closeAllModal()}>Close all Modal</Button>
    </Modal>
  );
}

export default ModalB;
```

### Example

```javascript
import ModalA from '@/components/ModalA';
import ModalB from '@/components/ModalB';
import { Button } from 'antd';
import { useModalHandle, withModalHandle } from 'react-modal-handle';

const ModalAWithHandle = withModalHandle(ModalA, 'modal-a');
const ModalBWithHandle = withModalHandle(ModalB, 'modal-b');

export default function Example() {
  const { openModal } = useModalHandle();

  return (
    <div>
      <Button onClick={() => openModal('modal-a')}>Open Modal A</Button>
      <Button onClick={() => openModal('modal-b')}>Open Modal B</Button>
      <ModalAWithHandle content="Content" />
      <ModalBWithHandle />
    </div>
  );
}
```
# react-modal-handle
