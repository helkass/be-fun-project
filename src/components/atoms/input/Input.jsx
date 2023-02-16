import React from "react";
import { InputWrapper } from "./inputStyled";

const Input = ({
  label,
  placeholder,
  name,
  id,
  type,
  options,
  optionsItems,
}) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      {options ? (
        <select id={id} name={name}>
          {optionsItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input placeholder={placeholder} name={name} id={id} type={type} />
      )}
    </InputWrapper>
  );
};

export default Input;
