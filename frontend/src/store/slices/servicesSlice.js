import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  serviceDetails: "",
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    sendRequestToReceiveServices: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendRequestToReceiveDetails: (state) => {
      state.loading = true;
      state.error = null;
    },
    exposeError: (state, action) => {
      const error = action.payload;
      state.loading = false;
      state.error = error;
    },
    receiptServicesSuccess: (state, action) => {
      const items = action.payload;
      state.items = items;
      state.loading = false;
      state.error = null;
    },
    receiptDetailsSuccess: (state, action) => {
      const details = action.payload;
      state.serviceDetails = details;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  sendRequestToReceiveServices,
  sendRequestToReceiveDetails,
  exposeError,
  receiptServicesSuccess,
  receiptDetailsSuccess,
} = servicesSlice.actions;

export default servicesSlice.reducer;
