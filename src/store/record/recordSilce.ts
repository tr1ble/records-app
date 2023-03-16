import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../index";

const initialState: RecordState = {
  records: [
    {
      description: "Vestibulum sed viverra dui.",
      date: new Date(),
    },
    {
      description: "Duis tristique felis sapien",
      date: new Date(),
    },
    {
      description: "Dermentum dolor ultrices dignissi",
      date: new Date(),
    }
  ]
}

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addRecord(
        state: RecordState,
        action: PayloadAction<IRecord>
    ) {
      state.records.push(action.payload);
    },
    removeRecord(
        state: RecordState,
        action: PayloadAction<number>
    ) {
      state.records.splice(action.payload, 1)
    },
    updateRecord(
        state: RecordState,
        action: PayloadAction<IRecordUpdate>
    ) {
      state.records[action.payload.number] = action.payload.record;
    }
  },
});

export const { addRecord, removeRecord, updateRecord } = recordSlice.actions;

export default recordSlice.reducer;

export const selectRecords = (state: RootState) => state.records.records;
