import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
// import {cryptoHistoryApi} from '../services/cryptoHistoryApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        // [cryptoHistoryApi.reducerPath]:cryptoHistoryApi.reducer,
      },
      middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(cryptoNewsApi.middleware),
      middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(cryptoApi.middleware),
      // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(cryptoHistoryApi.middleware)

})