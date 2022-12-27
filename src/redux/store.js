import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './ApiSlice'
import { userSlice } from './authSlice'
import{ cartSlice} from './cartSlice'
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
