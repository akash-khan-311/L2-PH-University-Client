import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInput = {
  type: string;
  placeholder: string;
  name: string;
  label: boolean;
};

const PHInput = ({ type, placeholder, name, label }: TInput) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className="text-[17px] text-white mb-2 block font-semibold"
          htmlFor={name}
        >
          {placeholder}
        </label>
      )}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item>
            <Input
              size="large"
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className="bg-white/10 backdrop-blur-lg "
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
