import {configureStore} from '@reduxjs/toolkit'
import ListProductReducer from './ListProductReducer'

export const store = configureStore({
  reducer: {
    listProductReducer: ListProductReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
})