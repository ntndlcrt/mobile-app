import Feed from '@/components/Feed'
import Larry from '@/components/Larry'

function Home() {
	return (
		<div>
			<h1 className="text-[6.4rem] uppercase font-extrabold">
				Web Keeper ma gueule
			</h1>
			<a href="#" className="button">
				C'est parti
			</a>
			<Feed />
			<Larry svgId="sonar" />
		</div>
	)
}

export default Home
