import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IsLoading from './components/shared/IsLoading'
import WorkInfo from './components/Works/WorkInfo'
import HomePage from './pages/HomePage'

function App() {

  const [fullLoading, setFullLoading] = useState(true)

  setTimeout(() => {
    if (fullLoading) setFullLoading(false)
  }, 1500);

  return (
    <div className="App">

      <IsLoading fullLoading={fullLoading} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/proyecto' element={<WorkInfo setFullLoading={setFullLoading} />} />
      </Routes>

    </div>
  )
}

export default App
