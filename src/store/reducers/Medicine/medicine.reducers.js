const initialState = {
    medicineDict: {},
    medicineIds: []
}
export const MedicineReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MEDICINES":
            return {
                ...state,
                ...action.payload,
            };

        case "ADD_MEDICINE":
            return { state, data: action.payload };
        // case "DELETE_MEDICINE":



        default:
            return state;
    }
};
