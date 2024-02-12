import { ReactNode, createElement } from "react";

export type classNameType = string;
export type childrenType = ReactNode;

export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  className?: classNameType;
}

export default function Form(props: IFormProps): ReactNode {
  
  const {
    defaultValues,
    buttonLabel = "Submit",
    children,
    onSubmit,
    handleSubmit,
    register,
    ...rest
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest} noValidate>
      {Array.isArray(children)
        ? children.map((child) => {
          return child.props.name
            ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name
              }
            })
            : child;
        })
        : children}

      <button className="btn btn-primary">{buttonLabel}</button>
    </form>
  );
}
