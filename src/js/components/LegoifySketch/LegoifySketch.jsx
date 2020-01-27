import React from 'react'
import P5Wrapper from '../utils/P5Wrapper'
import legoSketch from './sketch/legoify.js'

import styles from './LegoifySketch.module.css'

const LegoifySketch = ({config}) => {
	// const propTypes = {
	// 	config : PropTypes.shape({
	// 		imagePath: PropTypes.string.isRequired,
	// 		onSketchReady: PropTypes.func.isRequired
	// 	}).isRequired
	// }

	return (
		<P5Wrapper 
			sketch={legoSketch} 
			config={config}>
		</P5Wrapper>
	)
}



export default LegoifySketch