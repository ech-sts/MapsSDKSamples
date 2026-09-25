import { createRoot } from 'react-dom/client'
import App from './App/App'
import './i18n'
import { AppStoreProvider } from './App/Store/AppStore'

const root = createRoot(document.getElementById('root') as HTMLElement)

       
        root.render(
            <AppStoreProvider config={null}>
                <App />
            </AppStoreProvider>)
       

