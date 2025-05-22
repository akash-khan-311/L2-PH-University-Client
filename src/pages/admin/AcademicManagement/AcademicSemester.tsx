import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data, isLoading } = useGetAllSemestersQuery(undefined);
  console.log(data?.data);
  if (isLoading)
    return (
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Loading...
        </h1>
      </div>
    );
  if (data?.success) {
    return (
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          {data.message}
        </h1>
      </div>
    );
  }
};

export default AcademicSemester;
