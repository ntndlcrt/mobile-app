export default interface PageCard {
	id: string
	title: string | null
	content: string | null
	webSrc: string | null
	webUrl: string | null
	userId: string | null
	user: {
		name: string | null
	}
}
