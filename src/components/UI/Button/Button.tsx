import React, { FC } from "react";
import { Button as MuiButton } from "@mui/material";
import { IButtonProps } from "../../../types";

export const Button: FC<IButtonProps> = (props) => {
    return (
        <MuiButton variant={props.variant} onClick={props.onClick}>
            {props.label}
        </MuiButton>
    );
};
