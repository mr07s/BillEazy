const initialState = {
  data: {},
};
export const DeliveryChallanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DELIVERY_CHALLAN__DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DELIVERY_CHALLAN__DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
