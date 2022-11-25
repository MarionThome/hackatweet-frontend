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

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    initialiseTweets : (state, action) => {
      state.value = action.payload
    },
    addTweets: (state, action) => {
      state.value.unshift(action.payload)
      console.log('fonction ok :',action.payload)
    },
    removeTweets: (state, action) => {

      console.log('fonction ok :',action.payload)
      state.value = state.value.filter(e =>(( e.date !== action.payload.date)))
    },
  },
});

export const { addTweets, logremoveTweetsout, initialiseTweets, removeTweets } = tweetSlice.actions;
export default tweetSlice.reducer;