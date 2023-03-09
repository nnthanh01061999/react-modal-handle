import React, { PropsWithChildren } from 'react';

export interface IModalConTextData {
  opened: string[];
  callback: {
    [key: string]: (() => void) | undefined;
  };
}

export interface IModalContextState {
  data: IModalConTextData;
  setData: React.Dispatch<React.SetStateAction<IModalConTextData>>;
}

export const ModalContext = React.createContext<IModalContextState>({
  data: { opened: [], callback: {} },
  setData: () => [],
});

export const ModalContextProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [data, setData] = React.useState<IModalConTextData>({
    opened: [],
    callback: {},
  });

  const contextData: IModalContextState = {
    data,
    setData,
  };

  return (
    <ModalContext.Provider value={contextData}>
      {children}
    </ModalContext.Provider>
  );
};
