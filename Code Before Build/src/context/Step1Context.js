import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const Step1Context = createContext();

const initialState = {
  name: "",
  email: "",
  phone: "",
  isEmpty: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPhone":
      return {
        ...state,
        phone: action.payload,
      };

    default:
      throw new Error("Action unkonwn");
  }
}

function Step1Provider({ children }) {
  const [{ name, email, phone }, dispatch] = useReducer(reducer, initialState);
  const [steps, setSteps] = useState([false, false, false, false]);

  return (
    <Step1Context.Provider
      value={{
        name,
        email,
        phone,
        steps,
        setSteps,

        dispatch,
      }}
    >
      {children}
    </Step1Context.Provider>
  );
}

function useStep1() {
  const context = useContext(Step1Context);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { Step1Provider, useStep1 };
