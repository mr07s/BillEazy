const initialState = {
  data: {},
};
export const DeliveryChallanProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DELIVERY_CHALLAN_PRODUCT_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DELIVERY_CHALLAN_PRODUCT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
