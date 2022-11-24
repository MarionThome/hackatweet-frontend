import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

//action.payload a renvoyer : {
//    name : String, 
//    username : String, 
//    tweet : String, 
//    date : Date,
//    hashtag : String
// }

export const userSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addTweets: (state, action) => {
      state.value.push(action.payload)
    },
    removeTweets: (state, action) => {
      state.value = state.value.filter(e => e.tweet !== action.payload.tweet && e.date !== action.payload.date && e.username !== action.payload.username)
    },
  },
});

export const { addTweets, logremoveTweetsout } = userSlice.actions;
export default userSlice.reducer;