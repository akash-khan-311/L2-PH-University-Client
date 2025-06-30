import FieldWrapper from "@/components/form/FieldWrapper";
import PHInput from "@/components/form/PHInput";
import { Button } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// const studenDummyData ={
//   password: "studentnayeem",
//   student: {
//     name: {
//       firstName: "Nayeem",
//       middleName: "Ahmed",
//       lastName: "Khan"
//     },
//     gender: "male",
//     dateOfBirth: "1999-11-03",
//     email: "nayeem.khan@example.com",
//     contactNo: "01711223344",
//     emergencyContactNo: "01889977665",
//     bloodGroup: "O+",
//     presentAddress: "22 Mirpur Road, Dhaka",
//     permanentAddress: "5 Bashundhara R/A, Dhaka",
//     guardian: {
//       fatherName: "Nazmul Khan",
//       fatherOccupation: "Businessman",
//       fatherContactNo: "01744556677",
//       motherName: "Lamia Khan",
//       motherOccupation: "Homemaker",
//       motherContactNo: "01788776655"
//     },
//     localGuardian: {
//       name: "Uncle Morshed",
//       occupation: "Lecturer",
//       contactNo: "01922334455",
//       relationship: "Uncle"
//     },
//     profileImg: "https://example.com/images/nayeem_khan.png",
//     admissionSemester: "681f3fa6f8ce908c72d76fb6",
//     isDeleted: false
//   }
// }
const CreateStudent = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit :SubmitHandler<FieldValues> = data => {
      console.log(data);
      // const formData = new FormData();
      // formData.append('data', JSON.stringify(data));


      // // ! This is For Development
      // // ! Just For Checking ... Don't Worry About That . Relux Bro ❤
      // console.log(Object.fromEntries(formData))
      // reset();
    }
  return (
<div className=" w-full  mx-auto">
  <div className="flex justify-center items-center my-10">
    <h1 className="text-3xl md:text-3xl lg:text-4xl text-white">Create Student</h1>
  </div>
  <form onSubmit={handleSubmit(onSubmit)}>
 <div className="flex flex-col md:flex-row justify-between items-center gap-10">
   <FieldWrapper label="First Name" htmlFor="firstName" required>
    <PHInput type="text" name="firstName" placeholder="First Name"  register={register} errors={errors}/>
  </FieldWrapper>
    <FieldWrapper label="Middle Name" htmlFor="middleName" >
  <PHInput
    type="text"
    name="middleName"
    placeholder="Middle Name"
   
    
    required={false}
  />
    </FieldWrapper>
    <FieldWrapper label="Last Name" htmlFor="lastName" required>
      <PHInput type="text" name="lastName" placeholder="Last Name" register={register} errors={errors}/>
    </FieldWrapper>
 </div>
 <Button htmlType="submit">Submit</Button>
</form>
</div>
  );
};

export default CreateStudent;
