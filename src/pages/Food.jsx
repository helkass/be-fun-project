import React from 'react';
import LayoutCenter from '../components/LayoutCenter';
import food from "../assets/food.png";
import { links } from '../constants/foods';
import vector from "../assets/logo/food/Vector.png"

const Food = () => {
  return (
    <LayoutCenter
        title="Food"
        btnTitle="Something to eat"
        image={food}
        vector={vector}
        links={links}
    />
  )
}

export default Food