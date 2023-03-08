import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalHandle = () => {
  const { data, setData } = useContext(ModalContext);

  const openModal = (name: string) => {
    if (name) {
      if (!data.openedModals.includes(name)) {
        setData(prev => ({
          ...prev,
          openedModals: [...prev.openedModals, name],
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
        openedModals: data?.openedModals?.filter(item => item !== name),
      });
    }
  };

  const closeAllModal = async (willCallback: boolean = true) => {
    if (willCallback) {
      data?.openedModals?.forEach(async item => {
        const callback = await data.callback?.[item];
        if (callback instanceof Function) {
          await callback();
        }
      });
    }
    await setData({
      ...data,
      openedModals: [],
    });
  };

  const checkModalOpen = (name: string) => {
    return !!data?.openedModals?.includes(name);
  };

  return {
    openModal,
    closeModal,
    closeAllModal,
    checkModalOpen,
  };
};
