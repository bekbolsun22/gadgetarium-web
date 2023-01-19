import React, { ForwardRefRenderFunction } from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'
import {
	CheckboxActiveIcon,
	CheckboxDefaultIcon,
} from '../../../assets/icons/index'

interface CheckboxProps {
	checked: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: ForwardRefRenderFunction<HTMLButtonElement, CheckboxProps> = (
	{ checked, onChange, ...restProps },
	ref,
) => {
	return (
		<MuiCheckbox
			ref={ref}
			checked={checked}
			onChange={onChange}
			icon={<CheckboxDefaultIcon />}
			checkedIcon={<CheckboxActiveIcon />}
			{...restProps}
		/>
	)
}
export default React.forwardRef(Checkbox)
