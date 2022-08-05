import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createApiHeaders ={
    method:'GET',
    headers:{
        'x-access-token': process.env.REACT_APP_COINAPI_KEY,

    }
}


const createRequest=(url)=>({url,headers:createApiHeaders})

export const cryptoHistoryApi= createApi({
    reducerPath:'cryptoHistoryApi',
    baseQuery : fetchBaseQuery({baseUrl : process.env.REACT_APP_COINAPI_API_URL}),
    endpoints:(builder)=>({
            
         // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
          getCryptoHistory: builder.query({
            query: ({ uuid, timeperiod }) => createRequest(`coin/:${uuid}/history?timePeriod=${timeperiod}`),
          }),
      
          
        }),
      });
      
      export const {
        useGetCryptoHistoryQuery,
      } = cryptoApi;