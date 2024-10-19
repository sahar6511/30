import { configureStore } from "@reduxjs/toolkit";


import { roomsApi } from "./services/roomsApi";
import { reservedInfoApi } from "./services/reservedInfoApi";
// import { specialRoomsApi } from "./services/specialRoomsApi";

const customStore = configureStore({
  reducer: {

    [roomsApi.reducerPath]:roomsApi.reducer,
    [reservedInfoApi.reducerPath]:reservedInfoApi.reducer,
    // [specialRoomsApi.reducerPath]:specialRoomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     
      .concat(roomsApi.middleware)
      .concat(reservedInfoApi.middleware)
      // .concat(specialRoomsApi.middleware)
});

export default customStore;
