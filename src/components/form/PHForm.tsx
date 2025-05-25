
import { Form } from "antd";
import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

type PHFormProps<T = Record<string, unknown>> = {
  onSubmit: (data: T) => void;
  children: ReactNode;
};

const PHForm = <T,>({ onSubmit, children }: PHFormProps<T>) => {
  const methods = useForm<T>();
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PHForm;
