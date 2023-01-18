import React, { ForwardRefRenderFunction, useCallback } from "react";
import {
  InputAdornment,
  styled,
  TextField,
  InputProps as inputProps,
} from "@mui/material";

interface InputProps {
  placeholder?: string;
  Icon?: React.ReactNode;
  value: string;
  inputProps: inputProps;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { Icon, onChange, value, type, inputProps, placeholder, ...otherProps },
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
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      InputProps={{ ...viewIcon(), ...inputProps }}
      {...otherProps}
    />
  );
};

export default React.forwardRef(Input);

const outlinedSelectors = [
  "& .MuiOutlinedInput-notchedOutline",
  "&:hover .MuiOutlinedInput-notchedOutline",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline",
];
const InputTextStyled = styled(TextField)(() => ({
  borderRadius: "10px",
  backgroundColor: "#FAFAFA",
  border: "1px solid #909CB54D",
  [outlinedSelectors.join(",")]: {
    border: "none",
  },
}));
