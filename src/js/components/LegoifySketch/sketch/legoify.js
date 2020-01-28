import LegoBoard from './LegoBoard'

const legoSketch = p => {

	let canvas
	let hasImageLoaded = false

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

	p.customRedraw = (huh) => {
		console.log(huh)
		// switch(action){
		// 	case "INITIALIZE":
		// 		initialize()
		// 	break
		// 	case "download":
		// 		console.log(" TODO: sketch.save()")
		// 	break
		// 	case "loading":
		// 		console.log(" TODO: sketch.loadimage() ????", link)
		// 	break
		// 	case "shuffle":
		// 		console.log(" TODO: sketch.shuffle()")
		// 	break
		// 	case "animate":
		// 		console.log(" TODO: sketch.animate()")
		// 	break
		// 	case "legoify":
		// 		console.log(" TODO: sketch.legoify()")
		// 	break
		// }
	}

	const displayNewImage = source => {
		hasImageLoaded = false
		p.loadImage( source, img => {
			console.log("huh")
			hasImageLoaded = true
		})
	}
}

export default legoSketch