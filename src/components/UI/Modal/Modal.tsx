import React, { FC } from 'react'

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogProps as MuiDialogProps,
	DialogTitle,
	styled,
} from '@mui/material'

import { Button } from '../../UI'

interface DialogProps extends MuiDialogProps {}

type ModalProps = DialogProps & {
	title?: React.ReactNode | string
	onClose: () => void
	onConfirm: () => void
	confirmLabel?: string
}

export const Modal: FC<ModalProps> = ({
	open,
	children,
	onClose,
	title = 'Название',
	confirmLabel = 'Сохранить',
	onConfirm,
	...restProps
}) => {
	return (
		<StyledModal
			open={open}
			closeAfterTransition
			onClose={onClose}
			classes={{ paper: 'paper' }}
			{...restProps}
		>
			<DialogTitle className='title'>{title}</DialogTitle>
			<DialogContent className='content'>{children}</DialogContent>
			<DialogActions className='actions'>
				<StyledButton variant='outlined' onClick={onClose}>
					Отменить
				</StyledButton>
				<StyledButton variant='contained' onClick={onConfirm}>
					{confirmLabel}
				</StyledButton>
			</DialogActions>
		</StyledModal>
	)
}

const StyledModal = styled(Dialog)(() => {
	return {
		'& .paper': {
			padding: '40px 32px',
			borderRadius: '4px',
			rowGap: '32px',
		},
		'& .title': {
			padding: 0,
			textAlign: 'center',
			marginBottom: '4px',
			fontWeight: 500,
			fontSize: '24px',
			color: '#292929',
		},
		'& .content': {
			padding: 0,
		},
		'& .actions': {
			padding: 0,
			columnGap: '20px',
		},
		'& .actions > :not(:first-of-type)': {
			margin: '0',
		},
	}
})

const StyledButton = styled(Button)(() => ({
	width: '230px',
}))
