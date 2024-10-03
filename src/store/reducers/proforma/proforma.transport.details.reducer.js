const initialState = {
  data: {},
};
export const ProformaTransportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROFORMA_TRANSPORT_DETAILS":
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_PROFORMA_TRANSPORT_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
