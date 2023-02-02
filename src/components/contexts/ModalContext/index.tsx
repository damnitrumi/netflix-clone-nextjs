import { ModalOpenedProps } from "components/HomeComponents/ModalOpened";
import { createContext, useContext, useState } from "react";

const Context = createContext([]);

type ModalContextProviderProps = {
  children: React.ReactNode;
};

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  //Card
  const handleOpenBiggerModalClick = () => {
    setShowModal(true);
  };

  //ModalMaior
  const handleCloseModalClick = () => {
    setShowModal(false);
  };

  //ModalMenor
  const handleModalData = (cardData: ModalOpenedProps) => {
    setModalData(cardData);
  };

  return (
    <Context.Provider
      value={[
        modalData,
        showModal,
        handleModalData,
        handleOpenBiggerModalClick,
        handleCloseModalClick,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(Context);

  if (typeof context == "undefined") {
    throw new Error(
      "You have to use useCounterContext inside <CounterContextProvider/>",
    );
  }

  return [...context];
};
