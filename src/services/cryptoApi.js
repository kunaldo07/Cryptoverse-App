import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
           'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '7a70073248mshcbb4bc23595f737p16f03fjsn5cf24072eb89',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({

        getCryptos: builder.query({
            //endpoint here
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),

        
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
    })
});

//to get all the data for your query
export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi;