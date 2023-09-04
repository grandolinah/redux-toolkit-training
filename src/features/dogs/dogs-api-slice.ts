import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOG_API_KEY = 
'live_Ro7e1U9J5lhXqCSQ3wSe83VtDlEGsIzoNoMdBWNnyKvCw6K6jUak26aYyH77tJja';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.thedogapi.com/v1',
      prepareHeaders(headers) {
        headers.set('x-api-key', DOG_API_KEY);

        return headers;
      },
    }),
    endpoints(builder) {
      return {
        fetchBreeds: builder.query<Breed[], number | void>({
          query(limit = 10) {
            return `/breeds?limit=${limit}`;
          },
        }),
      };
    }
});

export const { useFetchBreedsQuery } = apiSlice;
