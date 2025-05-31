import { FieldValues, SubmitHandler } from "react-hook-form";

import { semesterOptions } from "@/constants/semester";
import { monthOptions } from "@/constants/global";
import { Button } from "antd";
import PHForm from "@/components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "@/schemas/academicManagement.schema";
import PHSelect from "@/components/form/PHSelect";
import { useAddAcademicSemesterMutation } from "@/redux/features/admin/AcademicManagement.api";
import { toast } from "react-toastify";
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const name = semesterOptions[data.name - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = await addAcademicSemester(semesterData);
      console.log(res)
      if (res && "error" in res && res.error && typeof res.error === "object" && "data" in res.error && (res.error as any).data?.message) {
        toast.error((res.error as any).data.message,{
          autoClose: 3000,
          position: "top-center",
          theme: "dark",
        });
      }
      const data = res.data;
      toast.success(data.message, {
        autoClose: 1000,
        position: "top-center",
        theme: "dark",
      });
    } catch(error) {
     
      console.log(error);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto w-full">
      <PHForm
        onSubmit={onSubmit}
        resolver={zodResolver(academicSemesterSchema)}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
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
