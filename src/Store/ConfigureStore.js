import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from '../features/youtube/youtubeSlice'
const Store=configureStore ({
  reducer: {
    youtubeApp:youtubeReducer
  }
})

export default Store;