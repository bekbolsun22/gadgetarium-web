import React, { ForwardRefRenderFunction, useCallback } from "react";
import { InputAdornment, styled, TextField } from "@mui/material";

interface InputProps {
  label?: string;
  placeholder?: string;
  Icon?: React.ReactNode;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { Icon, label, onChange, value, type, ...otherProps },
  ref
) => {
  const viewIcon = useCallback(() => {
    if (Icon) {
      return {
        endAdornment: <InputAdornment position="end">{Icon}</InputAdornment>,
      };
    }
  }, [Icon]);

  return (
    <InputTextStyled
      fullWidth
      ref={ref}
      label={label}
      onChange={onChange}
      value={value}
      type={type}
      InputProps={viewIcon()}
      {...otherProps}
    />
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;

const outlinedSelectors = [
  "& .MuiOutlinedInput-notchedOutline",
  "&:hover .MuiOutlinedInput-notchedOutline",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline",
];
const InputTextStyled = styled(TextField)(({}) => ({
  borderRadius: "10px",
  backgroundColor: "#FAFAFA",
  border: "1px solid #909CB54D",
  [outlinedSelectors.join(",")]: {
    border: "none",
  },
}));
