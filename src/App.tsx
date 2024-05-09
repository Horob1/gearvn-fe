import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.tsx'
import { HomePage, Showroom } from './pages/index.tsx'

function App() {
  return (
    <Routes>   
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='/showroom' element={<Showroom></Showroom>}></Route>
      </Route>
    </Routes>
  )
}

export default App
