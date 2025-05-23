/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

type PHFormProps = {
  onSubmit: (data: any) => void;
  children: ReactNode;
};

const PHForm = ({ onSubmit, children }: PHFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
