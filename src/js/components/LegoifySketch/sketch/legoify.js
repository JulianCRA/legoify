import LegoBoard from './LegoBoard'

const legoSketch = p => {

	let canvas

	const initialize = config => {
		console.log("INITALIZE adentro")
		console.log(config)
	}
	p.preload = () => {console.log("PRELOAD")}
	p.setup = () => {
		console.log("SETUP")
		canvas = p.createCanvas(p._userNode.clientWidth, p._userNode.clientHeight)
		p.background(120)
	}

	p.customRedraw = (config) => {
		console.log("CUSTOM")
		console.log(config.action)
		switch(config.action){
			case "INITIALIZE":
				initialize()
			break
		}
	}
}

export default legoSketch