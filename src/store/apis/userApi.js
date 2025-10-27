import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rimac-front-end-challenge.netlify.app',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/api/user.json'
    }),
  })
})

export const { useGetUsersQuery } = userApi;