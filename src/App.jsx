import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';

import MapFlights from './pages/MapFlights.jsx';




import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/mapFlights" element={<MapFlights />} />






        </Routes>
      </Container>
    </>
  );
}