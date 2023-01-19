import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

// regular buttons interface
export interface IButtonProps extends ButtonProps {
	children?: ReactNode | string
	variant?: 'text' | 'outlined' | 'contained' | undefined
	onClick: () => void
}
