import React from "react";
import Container from "../Container";
import CategoryCards from "../common/card";

const Categories = () => {
  return (
    <>
      <Container>
        <div className='w-full '>
          <CategoryCards />
        </div>
      </Container>
    </>
  );
};

export default Categories;
