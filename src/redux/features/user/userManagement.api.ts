

import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: 'users/create-user',
        method: 'POST',
        body:data
      }),
    }),
  }),
});


export const { useAddUserMutation } = userManagementApi;
