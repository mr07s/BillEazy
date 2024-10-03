const initialState = {
  data: {},
};
export const DeliveryChallanTransportReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "POST_DELIVERY_CHALLAN_TRANSPORT_DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DELIVERY_CHALLAN_TRANSPORT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
