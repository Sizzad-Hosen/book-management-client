

import { IBook, MetaData } from "@/app/types/bookManage.type";
import { TQueryParam, TResponseRedux } from "@/app/types/global";
import { baseApi } from "@/redux/api/baseApi";

const bookManagementApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({

    addBook: builder.mutation({
      query: (body) => ({
        url: '/books/create-book',
        method: 'POST',
        body
      }),
    }),

getAllBook: builder.query<{
  data: IBook[];
  meta: MetaData;
}, TQueryParam[]>({
  query: (args = []) => {
    const params = new URLSearchParams();

    args.forEach(({ name, value }) => {
      if (value !== undefined && value !== null) {
        params.append(name, String(value));
      }
    });

    return {
          url: `/books?${params.toString()}`,
      method: 'GET',
    };
  },
  transformResponse: (response) => {
    console.log('API response in transformResponse:', response);
    return {
      data: response.data,
      meta: response.meta,
    };
  },
  providesTags: ['books'],
}),




  }),

});



export const { useAddBookMutation , useGetAllBookQuery, useGetFiltersBookQuery } = bookManagementApi;
