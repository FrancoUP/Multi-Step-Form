import { createContext, useContext, useReducer, useEffect } from "react";

const Step2Context = createContext();

const initialState = {
  monthly: true,
  selected: [false, false, false],
  planCost: 0,
  price: [9, 12, 15],
};

function reducer(state, action) {
  switch (action.type) {
    case "setMonthly":
      return {
        ...state,
        monthly: !state.monthly,
      };
    case "setSelected":
      return {
        ...state,
        selected: [...action.payload],
      };
    case "setPlanCost":
      return {
        ...state,
        planCost: action.payload,
      };
    case "setPrice":
      return {
        ...state,
        price: action.payload,
      };

    default:
      throw new Error("Action unkonwn");
  }
}

function Step2Provider({ children }) {
  const [{ monthly, selected, planCost, price }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <Step2Context.Provider
      value={{
        monthly,
        selected,
        planCost,
        price,

        dispatch,
      }}
    >
      {children}
    </Step2Context.Provider>
  );
}

function useStep2() {
  const context = useContext(Step2Context);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { Step2Provider, useStep2 };
