import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/shoplite",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/all`,
    }),
    getAllFeaturedCollections: builder.query({
      query: () => `/product/all?featuredCollection=${true}`,
    }),
    getFeaturedProduct: builder.query({
      query: () => `/product/all?featuredProduct=${true}`,
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getAllShirts: builder.query({
      query: ({ query, sortBy, priceVal, mobilePriceVal }) =>
        `/product/all?category=shirt&${priceVal}${mobilePriceVal}&${query}&sort=${sortBy}`,
    }),
    getAllShoes: builder.query({
      query: ({ query, sortBy, priceVal,mobilePriceVal }) =>
        `/product/all?category=shoe&${priceVal}${mobilePriceVal}&${query}&sort=${sortBy}`,
    }),
    getAllSneakers: builder.query({
      query: ({ query, sortBy, priceVal, mobilePriceVal }) =>
        `/product/all?category=sneakers&${priceVal}${mobilePriceVal}&${query}&sort=${sortBy}`,
    }),
    getAllJerseys: builder.query({
      query: ({ query, sortBy, priceVal, mobilePriceVal }) =>
        `/product/all?category=jersey&${priceVal}${mobilePriceVal}&${query}&sort=${sortBy}`,
    }),
    getAllAccesories: builder.query({
      query: ({ query, sortBy, priceVal, mobilePriceVal }) =>
        `/product/all?category=accesories&${priceVal}${mobilePriceVal}&${query}&sort=${sortBy}`,
    }),

    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),

    getRelatedProducts: builder.query({
      query: (category) => `/product/all?category=${category}&limit=4`,
    }),

    getsearch: builder.query({
      query: (key) => `/product/${key}`,
    }),

    // mutations (login/register)
    register: builder.mutation({
      query: (user) => ({
        url:'/register',
        method: 'POST',
        body: user
      })
    }),

    login: builder.mutation({
      query: (user) => ({
        url:'/login',
        method: 'POST',
        body: user
      })
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url:`/users/${user._id}`,
        method: 'PATCH',
        body: user
      })
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllFeaturedCollectionsQuery,
  useGetFeaturedProductQuery,
  useGetProductByIdQuery,
  useGetAllShirtsQuery,
  useGetAllShoesQuery,
  useGetAllSneakersQuery,
  useGetAllJerseysQuery,
  useGetAllAccesoriesQuery,
  useGetAllProductsQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetRelatedProductsQuery,
  useGetsearchQuery
} = productApi;
