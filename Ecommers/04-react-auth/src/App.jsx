import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import RoutesIndex from './routes'
import './App.css'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <RoutesIndex />
      </Router>
    </>
  )
}

export default App
