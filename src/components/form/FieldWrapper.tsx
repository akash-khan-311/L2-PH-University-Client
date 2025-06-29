import React, { ReactNode, isValidElement } from "react";


type TFieldProps = {
  label?: string;
  htmlFor?: string;
  children: ReactNode;
  error?: any;
  required?: boolean;
};

const FieldWrapper = ({ label, children, htmlFor, error, required }: TFieldProps) => {
  const id = htmlFor || getChildId(children);
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
        className={`text-white text-sm font-semibold ${
  required
    ? 'after:content-["*"] after:ml-0.5 after:text-pink-500'
    : 'after:content-["(Optional)"] after:ml-1 after:text-white text-opacity-70'
}`}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <div role="alert" className="text-red-400  font-semibold capitalize ">
        {error.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children: ReactNode): string | undefined => {
  const childrenArray = React.Children.toArray(children);

  for (const child of childrenArray) {
    if (isValidElement(child)) {
      const id = (child.props as { id?: string }).id;
      if (id) return id;
    }
  }

  return undefined;
};

export default FieldWrapper;
