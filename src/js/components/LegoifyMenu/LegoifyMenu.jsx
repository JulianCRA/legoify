import React from 'react'
import PropTypes from 'prop-types'

import CornerMenu from '../ui/CornerMenu'

import * as animationImage 	from './assets/buttons/animate.svg'   //'./assets/buttons/animate.svg'
import downloadImage 	from './assets/buttons/download.svg'
import legoifyImage 	from './assets/buttons/lego.svg'
import loadImage 		from './assets/buttons/load.svg'
import scrambleImage 	from './assets/buttons/scramble.svg'

const LegoifyMenu = ({setAction}) => {
	console.log('animationImage :', animationImage);
	const elements = [
		{
			type : "button",
			tooltip : "Save the lego board to a file.",
			label : "DOWNLOAD",
			image : downloadImage,
			clickAction : () => setAction({newAction : "download"})
		},
		{
			type : "button",
			tooltip : "Load another image.",
			label : "LOAD",
			image : loadImage,
			clickAction : () => setAction({newAction : "loading"})
		},
		{
			type : "button",
			tooltip : "Change the disposition of the lego bricks",
			label : "SHUFFLE",
			image : scrambleImage,
			clickAction : () => setAction({newAction : "shuffle"})
		},
		{
			type : "button",
			tooltip : "Watch as the triangles are placed progressively.",
			label : "ANIMATE",
			image : animationImage,
			clickAction : () => setAction({newAction : "animate"})
		},
		{
			type : "button",
			label : "LEGO IT!",
			image : legoifyImage,
			clickAction : () => setAction({newAction : "lego"})
		}
	]

	return(
		<CornerMenu elements={elements} position={3} />
	)
}

LegoifyMenu.propTypes = {
	setAction: PropTypes.func.isRequired
}

export default LegoifyMenu




