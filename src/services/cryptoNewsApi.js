import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ea12aa4a28msh075bb58f4baf750p1c31f2jsne1991166a1a4',
    'X-RapidAPI-Host':'bing-news-search1.p.rapidapi.com'

}
const baseUrl= 'https://bing-news-search1.p.rapidapi.com/'


const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query: ({ newsCategory,count }) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&count=${count}&textFormat=Raw&safeSearch=Off`),
            //query: ({ count }) => createRequest(`/news/?${count}`)

        })
    })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
