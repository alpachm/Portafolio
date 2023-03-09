import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IsLoading from './components/shared/IsLoading'
import WorkInfo from './components/Works/WorkInfo'
import HomePage from './pages/HomePage'

function App() {

  const [fullLoading, setFullLoading] = useState(true)

  window.addEventListener('load', function () {
    setFullLoading(false)
  })

  return (
    <div className="App">

      <IsLoading fullLoading={fullLoading} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/proyecto' element={<WorkInfo fullLoading={fullLoading} setFullLoading={setFullLoading} />} />
      </Routes>

    </div>
  )
}

export default App
