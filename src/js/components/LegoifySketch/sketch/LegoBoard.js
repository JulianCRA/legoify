const _BRICK_DIMENSIONS = [
	{w: 1, h:1},
	{w: 2, h:1}, {w: 1, h:2},
	{w: 2, h:2},
	{w: 1, h:3}, {w: 3, h:1},
	{w: 2, h:3}, {w: 3, h:2},
	{w: 1, h:4}, {w: 4, h:1},
	{w: 2, h:4}, {w: 4, h:2},
]

const shuffleArray = (array) => {
	let currentIndex = array.length
	let temporaryValue
	let randomIndex
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
};

class LegoBoard{
	constructor(width, height){
		this.width = width
		this.height = height
		
		this.reset()
		this.fillGrid()
		
	}

	fillGrid = () => {
		for(let i = 0; i < this.width; i++)
			for(let j = 0; j < this.height; j++)
				if(this.grid[i][j] === -1)
					this.placeBrick(i, j)
		shuffleArray(this.bricks)
	}

	placeBrick = (x, y) => {
		let brick
		let indexes = [...Array(_BRICK_DIMENSIONS.length-1).keys()]
		shuffleArray(indexes)
		let brickFound = false

		while(!brickFound){
			brick = _BRICK_DIMENSIONS[indexes.pop()]
			brickFound = this.canPlaceBrick(x, y, brick.w, brick.h)
		}
		
		for(let i = 0; i < brick.w; i++)
			for(let j = 0; j < brick.h; j++)
				this.grid[x + i][y + j] = this.bricks.length
		this.bricks.push({...brick, x:x, y:y})
	}

	canPlaceBrick = (x, y, w, h) => {
		if(x + w <= this.width && y + h <= this.height){
			for(let i = 0; i < w; i++)
				for(let j = 0; j < h; j++)
					if(this.grid[x + i][y + j] !== -1)
						return false
			return true
		}
		return false
	}

	reset = (value = -1) => {
		this.bricks = [];
		this.grid = [];
		for(let i = 0; i < this.width; i++){
			this.grid[i] = []
			for(let j = 0; j < this.height; j++)
				this.grid[i][j] = value
		}
	}
}

export default LegoBoard