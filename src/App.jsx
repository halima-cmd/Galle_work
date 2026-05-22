import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/public/accueil/Home'
import Layout from './components/layout/Layout'
import FormationDetail from './pages/public/accueil/formations/FormationDetail'
import ActualiteDetail from './pages/public/accueil/actualites/ActualiteDetail'
import APropos from './pages/public/accueil/APropos/Apropos'
import Login from './pages/public/Login'
import Inscription from './pages/public/Inscription'

// const ActualiteDetail = lazy(() => import('./pages/public/ActualiteDetail'))
// const Login        = lazy(() => import('./pages/public/Login'))
// const Inscription  = lazy(() => import('./pages/public/Inscription'))
export default function App() {
  return (


    <BrowserRouter>
      <Layout>
      <Routes>
 
        <Route path="/formations/:id" element={<FormationDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/formations/:id" element={<FormationDetail />} />
        <Route path="/actualites/:id" element={<ActualiteDetail />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
} 