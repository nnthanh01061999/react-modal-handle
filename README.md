
# React Modal Handle

`react-modal-handle` is a package that allows you to easily control modals in your React application.

## Demo

https://react-modal-handle-example-usage.vercel.app/

## Features

| Feature |	Description	| Type|
----------------|-----------------|-----------------|
| Open modal | Allows you to open a specific modal by passing its unique ID to the `openModal` function.| `(name: string) => void`|
| Close modal | Allows you to close a specific modal by passing its unique ID to the `closeModal` function.	| `(name: string, willCallback: boolean = true) => void`|
| Close all modals | Allows you to close all open modals by calling the `closeAllModal` function.	| `(willCallback: boolean = true) => void`|
|Check if modal is open | Allows you to check if a specific modal is open by passing its unique ID to the `isModalOpen ` function. | `(name: string) => boolean`|
|Determine callback function|	Allows you to pass a props `onCloseCallback` which is a method that will be called when the modal is closed.	|  `(name: string, callback: () => void) => void` |
|Higher-Order Component|	Provides a `withModalHandle` HOC that wraps a component and automatically passes the `modalHandle` prop to it.|	`N/A`|
| Modal context	| Provides a `ModalContextProvider` that wraps your app and allows all components to access the modal handle.|	`N/A`|
| Custom hook|	Provides a `useModalHandle` hook that allows any component to access the modal handle.|	`() => { data, openModal, closeModal, closeAllModal, isModalOpen }` |

## Installation

Install react-modal-handle with npm or yarn

```bash
npm install --save react-modal-handle
```
```bash
yarn add react-modal-handle
```
    
## Usage/Examples

### ModalContextProvider
Wrap your app with the `ModalContextProvider` component to enable modal handling throughout your application:
```javascript
import { ModalContextProvider } from 'react-modal-handle';

function App() {
  return (
    <ModalContextProvider>
      {/* Your app code */}
    </ModalContextProvider>
  );
}
```

### useModalHandle
Use the `useModalHandle` hook to access modal handling functions and properties:

```javascript
import { useModalHandle } from 'react-modal-handle';

function MyComponent() {
  const { openModal, closeModal, closeAllModal, isModalOpen } = useModalHandle();

  return (
    <>
      <button onClick={() => openModal('my-modal')}>Open Modal</button>
      <button onClick={() => closeModal('my-modal')}>Close Modal</button>
      <button onClick={closeAllModal}>Close All Modals</button>
      <p>Modal is open: {isModalOpen('my-modal') ? 'yes' : 'no'}</p>
    </>
  );
}

```
### withModalHandle(HOC)
Use the `withModalHandle` higher-order component to add modal handling capabilities to your own modal components:

```javascript
import { withModalHandle } from 'react-modal-handle';

function MyModal({ onClose }) {
  return (
    <div>
      {/* Modal content */}
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
}

export default withModalHandle(MyModal, 'my-modal');
```

Now you can use the `MyModal` component like this:

```javascript
import MyModal from './MyModal';

function MyComponent() {
  const { openModal } = useModalHandle();

  const onCloseCallback = () => {
      alert('my modal is closed)
  }

  return (
    <button onClick={() => openModal('my-modal')}>Open My Modal</button>
    <MyModal onCloseCallback={onCloseCallback}/>
  );
}
```
### ModalHandleProps
Use the `ModalHandleProps` interface to define props for your own modal components that work with the modal handling functions and properties:
```javascript
import { ModalHandleProps } from 'react-modal-handle';

interface MyModalProps extends ModalHandleProps {
  title: string;
  content: string;
}

function MyModal({ title, content, onClose }: MyModalProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
}
```

Now you can use the `MyModal` component with the withModalHandle higher-order component:

```javascript 
import { withModalHandle } from 'react-modal-handle';

export default withModalHandle(MyModal, 'my-modal');
```
## Conclusion
React Modal Handle is a powerful yet lightweight package for managing modals in your React application. With a simple API, it's easy to get started and customize to your needs.
