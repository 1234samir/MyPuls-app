const initialState = {
  selectedPhoneModel: "",
  selectedCategory: [],
  totalPrice: "",
  selectedColor: "",
  selectedDateTime: "",
  selectedAddress: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PHONE_MODEL":
      return {
        ...state,
        selectedPhoneModel: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        selectedAddress: action.payload,
      };

    case "SET_SELECTED_DATE_TIME":
      return {
        ...state,
        selectedDateTime: action.payload,
      };

    // one more case
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    // other case
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "SET_SELECTED_COLOR":
      return {
        ...state,
        selectedColor: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
