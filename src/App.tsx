import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.tsx'
import { ErrorPage, HomePage, ProductDetail, SearchPage, Showroom } from './pages/index.tsx'

function App() {
  return (
    <Routes>   
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='/showroom' element={<Showroom></Showroom>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
        <Route path='/about' element></Route>
        <Route path='/me'></Route>
        <Route path='/products/:slug' element={<ProductDetail/>}></Route>
        <Route path="/404" element={<ErrorPage/>} />
      </Route>
      
      <Route path='*' element={<Navigate replace to="/404" />} />
    </Routes>
  )
}

export default App
