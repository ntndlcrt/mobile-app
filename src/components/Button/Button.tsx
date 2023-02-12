import React from 'react'
import styles from './button.module.scss'

interface props {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset' | undefined
}

export type buttonPropsType = props

export default function Button({
	children,
	className,
	onClick,
	type = 'button'
}: props) {
	return (
		<button
			className={`${className ?? ''} ${styles.button}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
}
