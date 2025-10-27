import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const plansApi = createApi({
  reducerPath: 'plansApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rimac-front-end-challenge.netlify.app',
  }),
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: () => '/api/plans.json'
    }),
  })
})

export const { useGetPlansQuery } = plansApi;