import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, gpt: gptReducer },
});

export default appStore;
