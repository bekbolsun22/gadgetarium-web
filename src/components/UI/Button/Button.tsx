import React, { FC } from "react";
import { Button as MuiButton } from "@mui/material";
import { IButtonProps } from "../../../types";

export const Button: FC<IButtonProps> = ({ variant, onClick, children }) => {
    return (
        <MuiButton variant={variant} onClick={onClick}>
            {children}
        </MuiButton>
    );
};
