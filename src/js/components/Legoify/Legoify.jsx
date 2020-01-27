import React from 'react'

import LegoifySketch from '../LegoifySketch'

import styles from './Legoify.module.css'

const Legoify = () => {
	return(
		<div className = {styles.legoifyContainer}>
			<LegoifySketch 
				config = {{
					action: "INITIALIZE"
				}}
			/>
		</div>
	)
}

export default Legoify