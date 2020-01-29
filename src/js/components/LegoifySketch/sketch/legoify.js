import LegoBoard from './LegoBoard'

const legoSketch = p => {

	let hasImageLoaded
	let sourceImage
	let legoifiedImage
	let pixelMap
	let board
	let brickSize
	const maxBricks = 50
	const minSize = 20

	p.preload = () => {console.log("PRELOAD")}
	p.setup = () => {
		console.log("SETUP")
		p.createCanvas(p._userNode.clientWidth, p._userNode.clientHeight)
		p.noLoop()
		p.imageMode(p.CENTER)
		p.translate(p.width * 0.5, p.height * 0.5)
		// p.background(120)

		hasImageLoaded = false
	}

	p.customRedraw = (config) => {
		console.log("CUSTOM")
		console.log('config', config)
		console.log('config.action', config.action)
		switch(config.action){
			case "download":
				console.log(" TODO: sketch.save()")
			break
			case "DISPLAY_SKETCH":
				loadNewImage(config.link)
			break
			case "SHUFFLE":
				shuffle()
			break
			case "animate":
				console.log(" TODO: sketch.animate()")
			break
			case "LEGOIFY":
				legoify()
			break
		}
	}

	const shuffle = () => {
		console.log("SHUFFF")
		board.reset()
		board.fillGrid()
		legoify()
	}

	const legoify = () => {
		p.clear()
		legoifiedImage.clear()
		board.bricks.map(
			brick => drawBrick(legoifiedImage, brick)
		)
		p.image(legoifiedImage, 0, 0)
	}

	const displayNewImage = () => {
		const ratio = Math.min(p.width/sourceImage.width, p.height/sourceImage.height)
		const newWidth = sourceImage.width * ratio
		const newHeight = sourceImage.height * ratio

		p.image(sourceImage, 0, 0, newWidth, newHeight)

		brickSize =  Math.min(Math.floor(Math.max(newWidth, newHeight) / maxBricks), minSize)
		const gridWidth = Math.floor(newWidth / brickSize)
		const gridHeight = Math.floor(newHeight / brickSize)
		board = new LegoBoard(gridWidth, gridHeight, sourceImage)

		legoifiedImage = p.createGraphics(gridWidth * brickSize, gridHeight * brickSize)
		legoifiedImage.background("black")

		pixelMap = p.createGraphics(board.width, board.height)
		pixelMap.image(sourceImage, 0, 0, pixelMap.width, pixelMap.height)
		pixelMap.loadPixels()

		hasImageLoaded = true
	}

	const loadNewImage = source => {
		hasImageLoaded = false
		sourceImage = p.loadImage( source, displayNewImage)
	}

	const drawBrick = (canvas, brick) => {
		const color = averageZoneColor(brick)
		if(!color) return

		canvas.fill(color)
		canvas.strokeWeight(1)
		canvas.stroke(0, 0, 0, 100)
		canvas.rect(brick.x*brickSize, brick.y*brickSize, brick.w*brickSize, brick.h*brickSize)

		canvas.fill(0, 0, 0, 40)
		canvas.strokeWeight(0.5)
		for(let i = 0; i < brick.w; i++)
			for(let j = 0; j < brick.h; j++)
				canvas.circle((brick.x + i + 0.5) * brickSize, (brick.y + j + 0.5) * brickSize, brickSize * .5)
	}

	const averageZoneColor = ({x, y, w, h}) => {
		let r = 0
		let g = 0
		let b = 0
		let a = 0
		const d = p.pixelDensity()
		let pixpos
		for(let i = x; i < x+w; i++){
			for(let j = y; j < y+h; j++){
				pixpos = (j * pixelMap.width * d + i) * 4 * d
				
				r += pixelMap.pixels[pixpos+0]
				g += pixelMap.pixels[pixpos+1]
				b += pixelMap.pixels[pixpos+2]
				a += pixelMap.pixels[pixpos+3]
			}
		}
		if(a===0) return false
		
		return [r/(w*h), g/(w*h), b/(w*h)]
	}
}

export default legoSketch