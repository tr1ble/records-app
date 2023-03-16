import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../index";

let id=0;

const initialState: RecordState = {
  records: [
    {
      id: id++,
      description: "Vestibulum sed viverra dui.",
      date: new Date().toDateString(),
    },
    {
      id: id++,
      description: "Duis tristique felis sapien",
      date: new Date().toDateString(),
    },
    {
      id: id++,
      description: "Dermentum dolor ultrices dignissi",
      date: new Date().toDateString(),
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
      state.records.push({...action.payload, id: id++ });
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
      state.records[action.payload.number] = { ...action.payload.record, date: new Date().toDateString() };
    }
  },
});

export const { addRecord, removeRecord, updateRecord } = recordSlice.actions;

export default recordSlice.reducer;

export const selectRecords = (state: RootState) => state.records.records;
