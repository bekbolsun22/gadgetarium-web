// regular buttons interface
export interface IButtonProps {
    label?: string;
    variant?: "text" | "outlined" | "contained" | undefined;
    onClick: () => void;
}
