import type { ArcgisPlaneNavigationElement } from '@ceddc/arcgis-flight-component'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ArcgisPlaneNavigationElementProps = DetailedHTMLProps<
	HTMLAttributes<ArcgisPlaneNavigationElement>,
	ArcgisPlaneNavigationElement
> & {
	'reference-element'?: string
}

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'arcgis-plane-navigation': ArcgisPlaneNavigationElementProps
		}
	}
}

declare module 'react/jsx-runtime' {
	namespace JSX {
		interface IntrinsicElements {
			'arcgis-plane-navigation': ArcgisPlaneNavigationElementProps
		}
	}
}

declare module 'react/jsx-dev-runtime' {
	namespace JSX {
		interface IntrinsicElements {
			'arcgis-plane-navigation': ArcgisPlaneNavigationElementProps
		}
	}
}

export {}

