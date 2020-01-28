import React from 'react'
import classNames from 'classnames'

import styles from './RoundButton.module.css'

const RoundButton = ({tooltip, label, image, action, position}) => {
	const cn = classNames(
		styles.roundButton,
		{
			[styles.toRightTooltip] : position.toRight,
			[styles.toLeftTooltip] : position.toLeft
		}
	)
		
	return (
		<div
			data-tooltip = {tooltip} 
			onClick = {action} 
			className = {cn} 
		>
			<div className = {styles.buttonImage}>
				<img src = {image} alt = ""/>
			</div>
			<label> {label} </label>
		</div>
	)
}

export default React.memo(RoundButton)