import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IsLoading from './components/shared/IsLoading'
import WorkInfo from './components/Works/WorkInfo'
import HomePage from './pages/HomePage'

function App() {

  const [fullLoading, setFullLoading] = useState(true)

  setTimeout(() => {
    setFullLoading(false)
  }, 3500);

  return (
    <div className="App">

      <IsLoading fullLoading={fullLoading} />

      <Routes>
        <Route path='/' element={<HomePage fullLoading={fullLoading} />} />
        <Route path='/proyecto' element={<WorkInfo fullLoading={fullLoading} setFullLoading={setFullLoading} />} />
      </Routes>

    </div>
  )
}

export default App
