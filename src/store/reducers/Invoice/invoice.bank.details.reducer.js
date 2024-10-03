const initialState = {
  data: {},
};
export const BankReducer = (state = initialState, action) => {
  console.log(action.payload);
  console.log("Hii");
  switch (action.type) {
    case "POST_BANK_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_BANK_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
