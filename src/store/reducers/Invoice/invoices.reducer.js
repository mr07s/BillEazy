const initialState = {
  data: {},
};
export const InvoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_INVOICE_DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_INVOICE_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
