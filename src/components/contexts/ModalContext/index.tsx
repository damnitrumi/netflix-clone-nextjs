import { ModalOpenedProps } from "components/HomeComponents/ModalOpened";
import { createContext, useContext, useState } from "react";

const Context = createContext([]);

type ModalContextProviderProps = {
  children: React.ReactNode;
};

const initialModalData = {
  id: 315162,
  title: "no-data",
  posterHorizontal: "no-data",
  videoUrl: "no-data",
  score: "no-data",
  overview: "no-data",
  similar: [
    {
      id: 315162,
      title: "no-data",
      posterHorizontal: "no-data",
      voteAverage: 9.789,
      overview: "no-data",
    },
  ],
};

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(initialModalData);

  //Card
  const handleOpenBiggerModalClick = () => {
    console.log("Abri/Fechei o Modal");
    setShowModal(true);
  };

  //ModalMaior
  const handleCloseModalClick = () => {
    console.log("To fechando o modal");
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
