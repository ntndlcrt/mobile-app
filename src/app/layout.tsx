import '@/styles/app.scss'

import { Montserrat } from '@next/font/google'

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
			<body className={montserrat.variable}>{children}</body>
		</html>
	)
}
