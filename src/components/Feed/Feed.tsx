import { use } from 'react'

import prisma from '@/lib/prisma'
import { PageCard } from '@/utils/types'

export default function Feed() {
	const feed: PageCard[] = use(getData())
	console.log(feed)

	return <p>HELLO</p>
}

async function getData(): Promise<PageCard[]> {
	const feed = await prisma.page.findMany({
		include: {
			user: {
				select: { name: true }
			}
		}
	})

	return feed
}
