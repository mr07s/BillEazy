const initialState = {
  data: {},
};
export const Invoice_Product_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_INVOICE_PRODUCT_DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_INVOICE_PRODUCT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
