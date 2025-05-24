
import PHForm from "@/components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";


const CreateAcademicSemester = () => {
  const onSubmit : SubmitHandler<FieldValues> = data=> {
    console.log(data)
  }
  return (
    <PHForm onSubmit={onSubmit}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">CreateAcademicSemester</h1>
    </PHForm>
  );
};

export default CreateAcademicSemester;