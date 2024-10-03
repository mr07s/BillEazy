const initialState = {
  data: {},
};
export const Single_Invoice_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ONE_INVOICE_DETAIL":
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_ONE_INVOICE_DETAIL":
      return { state, data: action.payload };

    default:
      return state;
  }
};
