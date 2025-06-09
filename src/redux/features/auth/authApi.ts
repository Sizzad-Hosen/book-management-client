import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: 'auth/login',
        method: 'POST',
        body:
      }),
    }),
  }),
});

// ✅ Correct hook export
export const { useLoginMutation } = authApi;
