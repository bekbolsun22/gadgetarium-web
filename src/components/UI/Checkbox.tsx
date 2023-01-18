import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import {
  CheckboxActiveIcon,
  CheckboxDefaultIcon,
} from "../../assets/icons/index";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      icon={<CheckboxDefaultIcon />}
      checkedIcon={<CheckboxActiveIcon />}
    />
  );
};
export default Checkbox;
