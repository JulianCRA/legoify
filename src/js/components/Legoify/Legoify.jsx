import React from 'react'

import LegoifySketch from '../LegoifySketch'
import LegoifyMenu from '../LegoifyMenu'
import ImageReader from '../ImageReader'
import actions from '../utils/actions'

import styles from './Legoify.module.css'

const Legoify = () => {
	const [config, setConfig] = React.useState({
		action: actions._DISPLAY_READER,
		link: null,
		openMenu: false
	})

	const updateLink = link => {
		setConfig({
			action: actions._DISPLAY_SKETCH,
			link: link
		})
	}

	const updateAction = a => {
		if(config.link){
			setConfig({
				...config, 
				link : a.action === actions._DISPLAY_READER ? null : config.link,
				openMenu : a.action === actions._DISPLAY_READER,
				action: a.action
			})
		}
	}

	const content = (config.action === actions._DISPLAY_READER) ?
		<ImageReader onImageLinkCreated = { updateLink } startOpen = { config.openMenu }/> : 
		<LegoifySketch config = {config} />

	return(
		<div className = {styles.legoifyContainer}>
			{ content }
			<LegoifyMenu update = {updateAction} />
		</div>
	)
}

export default Legoify