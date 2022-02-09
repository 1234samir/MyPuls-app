export let productAction = (data) => {
  return {
    type: "SET_PHONE_MODEL",
    payload: data,
  };
};
export let setSelectedCategory = (data) => {
  return {
    type: "SET_SELECTED_CATEGORY",
    payload: data,
  };
};

export let setTotalPrice = (data) => {
  return {
    type: "SET_TOTAL_PRICE",
    payload: data,
  };
};

export let setSelectedColor = (data) => {
  return {
    type: "SET_SELECTED_COLOR",
    payload: data,
  };
};

export let setSelectedDateTime = (data) => {
  return {
    type: "SET_SELECTED_DATE_TIME",
    payload: data,
  };
};

export let setSelectedAddress = (data) => {
  return {
    type: "SET_ADDRESS",
    payload: data,
  };
};
