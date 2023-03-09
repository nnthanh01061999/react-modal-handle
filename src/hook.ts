import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalHandle = () => {
  const { data, setData } = useContext(ModalContext);

  const openModal = (name: string) => {
    if (name) {
      if (!data.opened.includes(name)) {
        setData(prev => ({
          ...prev,
          opened: [...prev.opened, name],
        }));
      }
    }
  };

  const closeModal = async (name: string, willCallback: boolean = true) => {
    if (name) {
      if (willCallback) {
        const callback = await data.callback?.[name];
        if (callback instanceof Function) {
          await callback();
        }
      }
      await setData({
        ...data,
        opened: data?.opened?.filter(item => item !== name),
      });
    }
  };

  const closeAllModal = async (willCallback: boolean = true) => {
    if (willCallback) {
      data?.opened?.forEach(async item => {
        const callback = await data.callback?.[item];
        if (callback instanceof Function) {
          await callback();
        }
      });
    }
    await setData({
      ...data,
      opened: [],
    });
  };

  const isModalOpen = (name: string) => {
    return !!data?.opened?.includes(name);
  };

  return {
    data,
    openModal,
    closeModal,
    closeAllModal,
    isModalOpen,
  };
};
