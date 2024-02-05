import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='w-full mx-auto px-36  '>{children}</div>;
};

export default Container;
