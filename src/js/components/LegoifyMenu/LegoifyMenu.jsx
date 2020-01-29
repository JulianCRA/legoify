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
	const width  = window.innerWidth || document.documentElement.clientWidth || 
	document.body.clientWidth;
	const height = window.innerHeight|| document.documentElement.clientHeight|| 
	document.body.clientHeight;

	console.log(width, height);
	
	const elements = [
		{
			type : "button",
			tooltip : "Save the lego board to a file.",
			label : "SAVE",
			image : downloadImage,
			small : height < 500,
			action : () => update({action : actions._SAVE})
		},
		{
			type : "button",
			tooltip : "Load another image.",
			label : "LOAD",
			image : loadImage,
			small : height < 500,
			action : () => update({action : actions._DISPLAY_READER})
		},
		{
			type : "button",
			tooltip : "Change the disposition of the lego bricks",
			label : "SHUFFLE",
			image : scrambleImage,
			small : height < 500,
			action : () => update({action : actions._SHUFFLE})
		},
		{
			type : "button",
			tooltip : "Watch as the triangles are placed progressively.",
			label : "ANIMATE",
			image : animationImage,
			small : height < 500,
			action : () => update({action : actions._ANIMATE})
		},
		{
			type : "button",
			label : "LEGOIFY",
			image : legoifyImage,
			small : height < 500,
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




