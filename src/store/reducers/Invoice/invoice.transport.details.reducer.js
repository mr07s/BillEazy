const initialState = {
  data: {},
};
export const TransportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_TRANSPORT_DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_TRANSPORT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
