import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/styles/styles.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './i18n.ts';// needs to be bundled
import MenuAppBar from './ui/components/shared/AppBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback='loading locals...'>
    <MenuAppBar/>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
