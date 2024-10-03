const initialState = {
  data: {},
};
export const ProformaBuyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROFORMA_BUYER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_PROFORMA_BUYER_DETAILS":
      console.log("state");
      return { ...state };

    default:
      return state;
  }
};
