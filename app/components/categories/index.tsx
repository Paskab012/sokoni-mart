import React from "react";
import Container from "../Container";
import CategoryCards from "../common/card";
import Sections from "../sections";
import VendorServices from "../vendorServices";

const Categories = () => {
  return (
    <>
      <Container>
        <div>
          <Sections />
        </div>
      </Container>
      <div>
        <VendorServices />
      </div>
    </>
  );
};

export default Categories;
