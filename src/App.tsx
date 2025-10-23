import { Routes, Route, Navigate } from 'react-router'
import LayoutTypeScript from './layouts/LayoutTypeScript'
import LayoutReact from './layouts/LayoutReact'
import TypeScriptPage from './pages/TypeScriptPage'
import ReactPage from './pages/ReactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/typescript" replace />} />
      <Route
        path="/typescript"
        element={
          <LayoutTypeScript>
            <TypeScriptPage />
          </LayoutTypeScript>
        }
      />
      <Route
        path="/react"
        element={
          <LayoutReact>
            <ReactPage />
          </LayoutReact>
        }
      />
    </Routes>
  )
}

export default App
