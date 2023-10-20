import { createContext, useContext, useState } from "react";

const Step3Context = createContext();

function Step3Provider({ children }) {
  const [isSelected, setIsSelected] = useState([false, false, false]);

  return (
    <Step3Context.Provider
      value={{
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </Step3Context.Provider>
  );
}

function useStep3() {
  const context = useContext(Step3Context);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { Step3Provider, useStep3 };
