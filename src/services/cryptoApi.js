import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createApiHeaders ={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY ,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST

}


const createRequest=(url)=>({url,headers:createApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl : process.env.REACT_APP_CRYPTO_API_URL}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
          }),
      
          getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
      
          // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
          getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timPeriod}`),
          }),
      
          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
        }),
      });
      
      export const {
        useGetCryptosQuery,
        useGetCryptoDetailsQuery,
        useGetExchangesQuery,
        useGetCryptoHistoryQuery,
      } = cryptoApi;