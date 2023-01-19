import { ReactNode } from "react";

// regular buttons interface
export interface IButtonProps {
    children?: ReactNode | string;
    variant?: "text" | "outlined" | "contained" | undefined;
    onClick: () => void;
}
