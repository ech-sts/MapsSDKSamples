import { type FC, useEffect, useRef } from 'react'
import './MapComponent.scss'
import '@arcgis/map-components/components/arcgis-scene'
import '@arcgis/map-components/components/arcgis-weather'
import '@ceddc/arcgis-flight-component'
import type { ArcgisPlaneNavigationElement } from '@ceddc/arcgis-flight-component'

const PARAGLIDER_MODEL_URL = 'https://ceddc.github.io/arcgis-flight-component/models/fleet/paraglider.glb'

const MapComponent: FC = () => {
	const flightRef = useRef<ArcgisPlaneNavigationElement | null>(null)

	useEffect(() => {
		const flight = flightRef.current

		if (!flight) {
			return
		}

		flight.updateConfig({
			flight: { model: 'paraglider' },
			assets: {
				bodyUrl: PARAGLIDER_MODEL_URL,
				propellerUrl: null,
				boostUrl: null,
			},
		})

		void flight.start()
	}, [])

	return (
		<div className="map-component">
			<arcgis-scene id="scene" item-id="c56dab9e4d1a4b0c9d1ee7f589343516" />
			<arcgis-weather className="weather-widget" reference-element="scene" />
			<arcgis-plane-navigation ref={flightRef} reference-element="scene" auto-start-disabled />
		</div>
	)
}

export default MapComponent
