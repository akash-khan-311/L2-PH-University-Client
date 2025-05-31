import { baseApi } from "@/redux/api/baseApi";

// Define the SemesterQueryParam type if not imported from elsewhere
type SemesterQueryParam = {
  name: string;
  value: string;
};

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
            args.forEach((item: SemesterQueryParam) => {
            params.append(item.name, item.value);
            });
        }
        return {
          url: "/semesters",
          method: "GET",
          params,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/semesters/create-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
