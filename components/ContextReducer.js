import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  console.log("📦 Action received in reducer:", action.item);

  switch (action.type) {
    case "ADD": {
      const existingIndex = state.findIndex(
        item => item.id === action.item.id && item.size === action.item.size
      );

      if (existingIndex !== -1) {
        // Replace instead of adding if you want only latest qty
        const updatedState = [...state];
        updatedState[existingIndex].qty = action.item.qty;
        updatedState[existingIndex].unitPrice = action.item.unitPrice;
        updatedState[existingIndex].price =
          action.item.qty * action.item.unitPrice;

        return updatedState;
      } else {
        return [
          ...state,
          {
            ...action.item,
            price: action.item.qty * action.item.unitPrice,
          },
        ];
      }
    }

    case "REMOVE":
      return state.filter((_, index) => index !== action.index);

    case "CLEAR":
    case "DROP":
      return [];

    default:
      return state;
  }
};

export const Cart = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log("🛍️ Cart Updated:", state);
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
