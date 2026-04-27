import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/public/accueil/Home'
import Layout from './components/layout/Layout'


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
} 