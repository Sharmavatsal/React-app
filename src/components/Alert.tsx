import { ReactNode } from "react";

interface Props {
  children: ReactNode;// with the help of this we can pass any type of data to the component like string, number, boolean, object, array, etc. ReactNode is a type that represents any valid React child element. It can be a string, number, boolean, null, undefined, React element, or an array of React nodes.
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-danger">{children}</div>// alert alert-danger is class of bootstrap with different colors like danger for red, alert-primary for blue, etc
  )
}

export default Alert