import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './RoundButton.css'

const RoundButton = ({tooltip, label, image, clickAction, position}) => {
	
	const cn = classNames({
		'menu-btn' : true,
		'right-menu-btn' : position === 2 || position === 3,
		'left-menu-btn' : position === 1 || position === 4
	})

	return(
		<div 
			data-tooltip={tooltip} 
			className={cn}  
			onClick={clickAction}
		>
			<div className="btn-image">
				<img src={image} alt=""/>
			</div>
			<label> {label} </label>
		</div>
		
	)
}

/*RoundButton.propTypes = {
	tooltip: PropTypes.string,
	label: PropTypes.string,
	clickAction: PropTypes.func.isRequired,
	image: PropTypes.string,
	position: PropTypes.number.isRequired
}*/

export default RoundButton