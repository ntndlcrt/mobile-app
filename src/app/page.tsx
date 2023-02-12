'use client'

import { NextPage } from 'next'

import withProtection from '@/utils/authentification/withProtection'
import Button, { buttonPropsType } from '@/components/Button'

const buttonProps: buttonPropsType = {
	children: 'Click me',
	onClick: () => console.log('Clicked'),
	type: 'button'
}

const Home: NextPage = () => {
	return (
		<div>
			<h1 className="text-[6.4rem] uppercase font-extrabold">
				Nextjs starter by Antoine Delcourte
			</h1>
			<Button {...buttonProps} />
		</div>
	)
}

export default withProtection(Home)
