import React from 'react'
import PropTypes from 'prop-types'

import CornerMenu from '../ui/CornerMenu'
import actions from '../utils/actions'
import styles from './LegoifyMenu.module.css'

import animationImage 	from './assets/buttons/animate.svg'
import downloadImage 	from './assets/buttons/download.svg'
import legoifyImage 	from './assets/buttons/lego.svg'
import loadImage 		from './assets/buttons/load.svg'
import scrambleImage 	from './assets/buttons/scramble.svg'

const LegoifyMenu = ({update}) => {
	
	const elements = [
		{
			type : "button",
			tooltip : "Save the lego board to a file.",
			label : "DOWNLOAD",
			image : downloadImage,
			action : () => update({action : actions._SAVE})
		},
		{
			type : "button",
			tooltip : "Load another image.",
			label : "LOAD",
			image : loadImage,
			action : () => update({action : actions._DISPLAY_READER})
		},
		{
			type : "button",
			tooltip : "Change the disposition of the lego bricks",
			label : "SHUFFLE",
			image : scrambleImage,
			action : () => update({action : actions._SHUFFLE})
		},
		{
			type : "button",
			tooltip : "Watch as the triangles are placed progressively.",
			label : "ANIMATE",
			image : animationImage,
			action : () => update({action : actions._ANIMATE})
		},
		{
			type : "button",
			label : "LEGO IT!",
			image : legoifyImage,
			action : () => update({action : actions._LEGOIFY})
		}
	]

	return(
		<div className = {styles.legoifyMenu}>
			<CornerMenu 
				elements = {elements} 
				position = {{
					bottom:true, 
					toLeft:true
				}} 
			/>
		</div>
		
	)
}

LegoifyMenu.propTypes = {
	update: PropTypes.func.isRequired
}

export default LegoifyMenu




