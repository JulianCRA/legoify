import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './RoundSlider.css'

const RoundSlider = ({tooltip, label, image, hidden, min, max, value, step, position, changeAction}) => {
	const [isSliderActive, toggleSlider] = React.useState(false)
	const [sliderValue, setValue] = React.useState(value)

	if(hidden && isSliderActive) toggleSlider(false)
	console.log('sliderValue :', sliderValue);
	const cn = classNames({
		'menu-btn' : true,
		'menu-slider' : true,
		'menu-slider-hidden' : !isSliderActive, 
		'right-menu-btn' : position === 2 || position === 3,
		'left-menu-btn' : position === 1 || position === 4
	})

	return(
		<div 
			data-tooltip={tooltip} 
			className={cn}  
		>
			<div className = "btn-image" onClick = {() => toggleSlider(!isSliderActive)}>
				<img src={image} alt=""/>
			</div>
			<label> {label} </label>
			<div className = "slider-bg">
				<input	onChange = {e => changeAction(e)}
						defaultValue = {value}
						className = "slider" 
						type = "range" 
						min = {min} 
						max = {max} 
						step = {step} 
				/>
			</div>
		</div>
		
		
	)
}

/*RoundSlider.propTypes = {
	tooltip: PropTypes.string,
	label: PropTypes.string,
	clickAction: PropTypes.func.isRequired,
	image: PropTypes.string,
	position: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired
}*/

export default RoundSlider