import type { FC } from 'react'
import './App.scss'
import MapComponent from './Components/MapComponent/MapComponent'
import useAppStore from './Store/AppStore'

const App: FC = () => {
	const errors = useAppStore(state => state.errors)
	const removeError = useAppStore(state => state.removeError)
	const addError = useAppStore(state => state.addError)
	const toggleLang = useAppStore(state => state.toggleLang)
	const activeLanguage = useAppStore(state => state.activeLanguage)

	return (
		<div className="app">						
			<MapComponent />			
		</div>
	)
}

export default App
