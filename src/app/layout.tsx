'use client'

import '@/styles/app.scss'

import { Montserrat } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className={montserrat.variable}>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	)
}
