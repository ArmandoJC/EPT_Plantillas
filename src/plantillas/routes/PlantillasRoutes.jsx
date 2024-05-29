import { Navigate, Route, Routes } from "react-router-dom"
import { PlantillasPage } from "../pages/PlantillasPage"


export const PlantillasRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <PlantillasPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}