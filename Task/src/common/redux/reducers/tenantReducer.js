import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tenants: [],
  selectedTenant: {},
  error: false,
  loading: false,
};
export const getTenants = createAsyncThunk("tenants/ten", async () => {
  return fetch("https://hungry-skinny-cappelletti.glitch.me/tenants")
    .then((res) => res.json())
    .then((result) => {
      console.log("first", result);
      return result;
    });

  const data = await res.json();

  return data;
});
const tenantsReducer = createSlice({
  name: "tenants",
  initialState,
  reducers: {},
  extraReducers: {
    [getTenants.fulfilled]: (state, action) => {
      console.log("test", action.payload);
      state.loading = false;
      state.tenants = action.payload;
    },
    [getTenants.pending]: (state) => {
      state.loading = true;
    },
    [getTenants.rejected]: (state) => {
      state.Loading = false;
      state.error = true;
    },
  },
});

export default tenantsReducer.reducer;
