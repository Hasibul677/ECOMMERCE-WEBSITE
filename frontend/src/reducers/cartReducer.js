import { ADD_TO_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExit = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExit) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExit.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
