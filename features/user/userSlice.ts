import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { reg } from "../../api/client";

import type { RootState } from "../../store/store";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id?: number;
  userName: string;
  pass: string;
}

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState();

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (user: User) => {
    const res = await reg(user.userName, user.pass);
    return res;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addNewUser.fulfilled, (state, { payload }) => {
      if (payload?.id) {
        state.entities[payload?.id] = payload;
        state.ids.push(payload?.id);
      }
    });
  },
});

// export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state: RootState) => state.users
);
