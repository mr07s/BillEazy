const initialState = {
  data: {},
};
export const DeliveryChallanBuyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DELIVERY_CHALLAN_BUYER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DELIVERY_CHALLAN_BUYER_DETAILS":
      console.log("state");
      return { ...state };

    default:
      return state;
  }
};
