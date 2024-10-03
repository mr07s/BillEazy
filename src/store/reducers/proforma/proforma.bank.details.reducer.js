const initialState = {
  data: {},
};
export const ProformaBankReducer = (state = initialState, action) => {
  console.log(action.payload);
  console.log("Hii");
  switch (action.type) {
    case "POST_PROFORMA_BANK_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_PROFORMA_BANK_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
