const initialState = {
  data: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PRODUCT_DETAILS":
      return {
        ...state,
        // ...action.payload,
        data: [action.payload, ...state.data],
      };

    case "FETCH_PRODUCT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
