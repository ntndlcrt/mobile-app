import Sonar from './_files/sonar.svg'

export default function Larry({ svgId }: { svgId: string }) {
	switch (svgId) {
		case 'sonar':
			return <Sonar />
		default:
			return <div>Unknown svgId</div>
	}
}
