'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { NextPageContext } from 'next'

const withProtection = (WrappedComponent: React.FunctionComponent) => {
	const ProtectedPage = () => {
		const Router = useRouter()
		const [isLoggedIn, setIsLoggedIn] = useState(false)

		useEffect(() => {
			if (!localStorage.getItem('isLoggedIn')) {
				Router.push('/login')
			} else {
				setIsLoggedIn(true)
			}
		}, [])

		return isLoggedIn ? <WrappedComponent /> : ''
	}

	ProtectedPage.getInitialProps = async ({ req }: NextPageContext) => {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		return { userAgent }
	}

	return ProtectedPage
}

export default withProtection
