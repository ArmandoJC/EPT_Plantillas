import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PlantillasRoutes } from '../plantillas/routes/PlantillasRoutes';
import { Footer } from '../plantillas/components/Footer';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* PlantillasApp */}
        <Route path="/*" element={<PlantillasRoutes />} />

      </Routes>
      <Footer />
    </>
  )
}