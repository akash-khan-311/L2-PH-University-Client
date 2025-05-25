import PHForm from "@/components/form/PHForm";

import PHSelect from "@/components/form/PHSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[data.name - 1].label;
    const semesterData = {
      name,
      code: data.name,
    };
    console.log(semesterData);
  };
  return (
    <div className="md:w-1/2 mx-auto w-full ">
      <PHForm onSubmit={onSubmit}>
        <div className="flex justify-between items-center">
          <PHSelect options={nameOptions} label="Name" name="name" />
          <PHSelect options={nameOptions} label="Year" name="year" />
        </div>
       <div className="flex justify-between items-center">
         <PHSelect options={nameOptions} label="Start Month" name="startMonth" />
        <PHSelect options={nameOptions} label="End Month" name="endMonth" />
       </div>
        <Button
          size="large"
          variant="solid"
          htmlType="submit"
          className="w-full mt-10 "
        >
          Submit
        </Button>
      </PHForm>
    </div>
  );
};

export default CreateAcademicSemester;
