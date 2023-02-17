import React from "react";
import { CategoriesSliderList, CategoryItem } from "./categoriesSliderStyled";

// required label and icons
// value of array list
// value property urlImage and label only as default
const CategoriesComponent = ({ data }) => {
  return (
    <CategoriesSliderList>
      {data.map((cat) => (
        <CategoryItem key={cat.label}>
          <img src={cat.urlImage} alt="slides" />
          {cat.label}
        </CategoryItem>
      ))}
    </CategoriesSliderList>
  );
};

export default CategoriesComponent;
