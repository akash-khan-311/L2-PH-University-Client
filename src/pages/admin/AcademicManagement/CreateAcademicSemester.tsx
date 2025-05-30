import { FieldValues, SubmitHandler, } from "react-hook-form";

import { semesterOptions } from "@/constants/semester";
import { monthOptions } from "@/constants/global";
import { Button } from "antd";
import PHForm from "@/components/form/PHForm";
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "@/schemas/academicManagement.schema";
import PHSelect from "@/components/form/PHSelect";
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));


const CreateAcademicSemester = () => {



  const onSubmit : SubmitHandler<FieldValues> = (data: any) => {
   
const name = semesterOptions[data.name - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <div className="md:w-1/2 mx-auto w-full">
      <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
         <div className="flex justify-between items-center gap-x-10">
          <div className="w-full">
             <PHSelect label="Name" name="name" options={semesterOptions} />
          </div>
          <div className="w-full">
            <PHSelect label="Year" name="year" options={yearOptions} />
          </div>
         </div>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
    </div>
  );
};

export default CreateAcademicSemester;
