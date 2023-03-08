import { ModalContext } from './ModalContext';
import { ModalHandleProps } from './interface';
import { useModalHandle } from './hook';
import React, { useContext, useEffect } from 'react';

export const withModalHandle = <T extends ModalHandleProps = ModalHandleProps>(
  Component: React.ComponentType<T>,
  name: string
) => {
  const displayName = Component.displayName || Component.name || 'Component';

  const ComponentWithHandler = (props: Omit<T, 'onClose'>) => {
    const { onCloseCallback } = props;
    const {
      data: { openedModals },
      setData,
    } = useContext(ModalContext);

    const { closeModal } = useModalHandle();

    const handleClose = () => {
      closeModal(name);
    };

    useEffect(() => {
      if (onCloseCallback) {
        setData(prev => ({
          ...prev,
          callback: {
            ...prev.callback,
            [name]: openedModals.includes(name) ? onCloseCallback : undefined,
          },
        }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openedModals]);

    return openedModals.includes(name) ? (
      <Component {...(props as T)} onClose={handleClose} />
    ) : null;
  };

  ComponentWithHandler.displayName = `withModalHanlde(${displayName})`;

  return ComponentWithHandler;
};
