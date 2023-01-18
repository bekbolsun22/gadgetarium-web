import React, { FC } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogProps as MuiDialogProps,
	DialogTitle,
	styled,
} from '@mui/material'

interface DialogProps extends MuiDialogProps {}

type ModalProps = DialogProps & {
	title: React.ReactNode | string
	onClose: () => void
	buttonLabel?: string
	onClick: () => void
}

export const Modal: FC<ModalProps> = ({
	open,
	children,
	onClose,
	title,
	buttonLabel = 'Сохранить',
	onClick,
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
                {/* @TODO button styles */}
				<Button onClick={onClose}>Отменить</Button>
				<Button onClick={onClick}>{buttonLabel}</Button>
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
		},
	}
})
