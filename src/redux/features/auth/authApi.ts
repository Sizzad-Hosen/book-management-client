import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body:data
      }),
    }),
  }),
});

// ✅ Correct hook export
export const { useLoginMutation } = authApi;
