const initialState = {
  data: {},
};
export const ProformaProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROFORMA_PRODUCT_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_PROFORMA_PRODUCT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
