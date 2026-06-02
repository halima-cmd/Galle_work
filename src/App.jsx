import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/accueil/Home";
import Layout from "./components/layout/Layout";
import FormationDetail from "./pages/public/accueil/formations/FormationDetail";
import ActualiteDetail from "./pages/public/accueil/actualites/ActualiteDetail";
import APropos from "./pages/public/accueil/APropos/Apropos";
import Login from "./pages/public/Login";
import Inscription from "./pages/public/Inscription";
import LearningCourse from "./pages/public/accueil/formations/LearningCourse";
import Formations from "./pages/public/accueil/formations/Formations";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/:id" element={<FormationDetail />} />
          <Route path="/learn/:id" element={<LearningCourse />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/actualites/:id" element={<ActualiteDetail />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}