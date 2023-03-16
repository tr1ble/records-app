import { configureStore } from "@reduxjs/toolkit";
import recordReducer from './record/recordSilce';

export const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
