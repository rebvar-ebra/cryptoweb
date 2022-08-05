import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host':process.env.REACT_APP_CRYPTO_NEWS_HOST

}



const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewApi',
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_NEWSAPI_API_URL}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query: ({ newsCategory,count }) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&count=${count}&textFormat=Raw&safeSearch=Off`),
            //query: ({ count }) => createRequest(`/news/?${count}`)

        })
    })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
