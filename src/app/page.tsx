// 'use client'

import withProtection from '@/utils/authentification/withProtection'
import prisma from '@/lib/prisma'

const Home = async () => {
	const { feed } = await getData()
	console.log(feed)

	return (
		<div>
			<h1 className="text-[6.4rem] uppercase font-extrabold">
				Nextjs starter by Antoine Delcourte
			</h1>
		</div>
	)
}

// export default withProtection(Home)
export default Home

async function getData() {
	const feed = await prisma.page.findMany({
		include: {
			user: {
				select: { name: true }
			}
		}
	})

	return {
		feed
	}
}
