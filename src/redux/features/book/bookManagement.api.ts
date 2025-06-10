

import { baseApi } from "@/redux/api/baseApi";

const bookManagementApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({

    addBook: builder.mutation({
      query: (body) => ({
        url: 'books/create-book',
        method: 'POST',
        body
      }),
    }),
  }),
});


export const { useAddBookMutation  } = bookManagementApi;
