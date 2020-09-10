export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic for adding item to basket

      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      if ((index) => 0) {
        //item exists in item, remove it
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as it doesnt exist `
        );
      }
      //LOGIC FOR REMOVING FROM BASKET
      return { ...state, basket: newbasket };

    default:
      return state;
  }
}

export default reducer;
