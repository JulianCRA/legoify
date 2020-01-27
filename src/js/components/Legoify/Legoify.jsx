import React from 'react'

import LegoifySketch from '../LegoifySketch'
import LegoifyMenu from '../LegoifyMenu'

import styles from './Legoify.module.css'

const Legoify = () => {
	const setAction = a => console.log("ACTION:", a)
	return(
		<div className = {styles.legoifyContainer}>
			<LegoifySketch 
				config = {{
					action: "INITIALIZE"
				}}
			/>
			<LegoifyMenu setAction={setAction} />
		</div>
	)
}

export default Legoify