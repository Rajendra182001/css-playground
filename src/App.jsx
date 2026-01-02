import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Working from './Working'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Working/>} />
      </Routes>
    </Router>
  )
}

export default App
