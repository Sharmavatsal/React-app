import React from 'react'

interface Props {
  children: React.ReactNode; // with the help of this we can pass any type of data to the component like string, number, boolean, object, array, etc. ReactNode is a type that represents any valid React child element. It can be a string, number, boolean, null, undefined, React element, or an array of React nodes.
  onClick?: () => void; // optional prop to handle button click
}

const Button = ({children, onClick}: Props) => {
  return (
    <button className='btn btn-primary' onClick={onClick}>{children}</button>
  )
}

export default Button