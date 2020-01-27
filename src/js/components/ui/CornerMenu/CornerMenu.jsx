import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RoundButton from '../RoundButton'
import RoundSlider from '../RoundSlider'

import './CornerMenu.css'

const CornerMenu = ({elements, position}) => {

	const [isMenuOpen, toggleMenu] = React.useState(false);

	const buttons = elements.map(element => {
		switch(element.type){
			case "button":
				return(
					<RoundButton
						tooltip = {element.tooltip}
						label = {element.label}
						image = {element.image}
						clickAction = {element.clickAction}
						position = {position}
						key = {element.label}>
					</RoundButton>
				)
			case "range":
				return(
					<RoundSlider 
						changeAction = {element.changeAction}
						hidden={!isMenuOpen}
						tooltip = {element.tooltip}
						label = {element.label}
						image = {element.image}
						min = {element.min}
						max = {element.max}
						step = {element.step}
						value = {element.value}
						position={position}
						key = {element.label}>
					</RoundSlider>
				)
		}
		}
	)
	
	let cn = classNames({
		'vertical-menu' : true,
		'on-the-right' : position === 2 || position === 3,
		'on-the-left' : position === 1 || position === 4,
		'from-the-top' : position === 1 || position === 2,
		'from-the-bottom' : position === 3 || position === 4,
		'closed-menu' : !isMenuOpen
	})

	return (
		<div className={cn}>
			<div className="menu-toggler">
				<button onClick = {()=>{toggleMenu(!isMenuOpen)}} className={"hamburger hamburger--spin" + (isMenuOpen?" is-active":"")} type="button">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
			
			{buttons}
		</div>
	)
}

CornerMenu.propTypes = {
	elements: PropTypes.array.isRequired,
	position: PropTypes.number.isRequired
}

export default CornerMenu
