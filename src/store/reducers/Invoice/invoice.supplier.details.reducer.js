const initialState = {
  data: {},
};
export const SupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_SUPPLIER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_SUPPLIER_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
