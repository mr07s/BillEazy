const initialState = {
  data: {},
};
export const ProformaSupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROFORMA_SUPPLIER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_PROFORMA_SUPPLIER_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
