export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      // console.log(state);
      const index = state.basket.findIndex((item) => item.id === action.id);
      // console.log(index);
      if (index >= 0) {
        let newBasket = [...state.basket];
        newBasket.splice(index, 1);
        return {
          ...state,
          basket: newBasket,
        };
      }

    default:
      return state;
  }
};

export default reducer;
