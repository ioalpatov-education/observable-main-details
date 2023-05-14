import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getServicesListEpic, getServiceDetailsEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: [epicMiddleware],
});

const epic = combineEpics(getServicesListEpic, getServiceDetailsEpic);

epicMiddleware.run(epic);
