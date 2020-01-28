import React from 'react'

import LegoifySketch from '../LegoifySketch'
import LegoifyMenu from '../LegoifyMenu'
import ImageReader from '../ImageReader'
import actions from '../utils/actions'

import styles from './Legoify.module.css'


const Legoify = () => {
	const [action, setAction] = React.useState(actions._DISPLAY_READER)

	const [link, setLink] = React.useState()

	const updateLink = link => {
		setLink(link)
		setAction(actions._DISPLAY_SKETCH)
	}

	const updateAction = a => {
		console.log(a);
	}
	
	const content = (action === actions._DISPLAY_READER) ?
		<ImageReader onImageLinkCreated = { updateLink } /> : 
		<LegoifySketch config = {{ action:action, link:link }} />

	return(
		<div className = {styles.legoifyContainer}>
			{ content }
			<LegoifyMenu update = {updateAction} />
		</div>
	)
}

export default Legoify