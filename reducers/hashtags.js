import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
};


export const hashtagSlice = createSlice({
  name: 'hashtag',
  initialState,
  reducers: {
    updateHashtag: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { updateHashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;