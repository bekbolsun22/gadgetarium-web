import React, { FC } from 'react';
import { IconButton as MyButton, Button, styled } from '@mui/material';
import { IIconButtonProps } from '../../../types';

export const IconButton: FC<IIconButtonProps> = ({
    icon,
    label,
    onClick,
    color,
}) => {
    return label ? (
        <StyledButton
            color={color}
            variant="contained"
            onClick={onClick}
            startIcon={icon}
        >
            {label}
        </StyledButton>
    ) : (
        <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>
    );
};

const StyledButton = styled(Button)<IIconButtonProps>(() => ({
    border: 'none',
}));

const StyledIconButton = styled(MyButton)<IIconButtonProps>(() => ({
    backgroundColor: '#CB11AB',
    '&:hover': {
        backgroundColor: '#FFF',
    },
}));
