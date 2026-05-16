import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/public/accueil/Home'
import Layout from './components/layout/Layout'
import FormationDetail from './pages/public/accueil/formations/FormationDetail'
import ActualiteDetail from './pages/public/accueil/actualites/ActualiteDetail'
import APropos from './pages/public/accueil/APropos/Apropos'
// const ActualiteDetail = lazy(() => import('./pages/public/ActualiteDetail'))

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
      </Routes>
      </Layout>
    </BrowserRouter>
  )
} 