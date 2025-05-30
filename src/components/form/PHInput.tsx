import { FieldErrors, UseFormRegister } from "react-hook-form";

type TInput = {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const PHInput = ({ register, name, errors, type, placeholder }: TInput) => {
  return (
    <div className="">
      <input
        {...register(name, { required: `${name} is required` })}
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`${
          errors[name] ? "border-red-500" : "border-white"
        } w-full px-4 py-3  text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white`}
      />
      
    </div>
  );
};

export default PHInput;
