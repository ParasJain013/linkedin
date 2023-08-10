import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: null,
  },

  reducers: {
    login: (state,action) => {
      state.user = action.payload;
      // console.log(state.user);
    },
    logout: (state) => {
      state.user = null;
      // console.log("LOGOUT DISPATCH")
    },
  }
});

export const { login , logout} = userSlice.actions;

export const selectUser = (state) => state.counter.user;


export default userSlice.reducer;
