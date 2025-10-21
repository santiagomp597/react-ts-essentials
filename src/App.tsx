import HooksSection from './components/hooks-section/HooksSection'
import Layout from './layouts/Layout'

function App() {

  return (
    <Layout>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Essentials of React + TypeScript</h1>
        <p>Welcome to the React + TypeScript essentials project!</p>
      </div>
      <HooksSection />
    </Layout>
  )
}

export default App
