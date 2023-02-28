'use client'

import '@/styles/app.scss'

import { Raleway } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'

const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className={raleway.variable}>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	)
}
