import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : 'counter',

  initialState : {
    value : [],
  },

  reducers : {

    addBook : (state,action) => {
      state.value = [...state.value,action.payload]
    },

  },

})

export const {addBook} = counterSlice.actions

export default counterSlice.reducer
