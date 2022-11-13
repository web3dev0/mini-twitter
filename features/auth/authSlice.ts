import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import type { User } from "../user/userSlice";

interface IAuthType {
  user: User | null;
}
const initialState: IAuthType = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    auth: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { logout, auth } = slice.actions;
export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
