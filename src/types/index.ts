import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

// buttons interfaces
export interface IButtonProps extends ButtonProps {
    children?: ReactNode | string;
    variant?: 'text' | 'outlined' | 'contained' | undefined;
    onClick: () => void;
}

export interface IIconButtonProps extends ButtonProps {
    onClick: () => void;
    icon?: ReactNode;
    label?: string;
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
        | undefined;
}
