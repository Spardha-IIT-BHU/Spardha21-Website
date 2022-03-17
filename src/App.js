import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './components/LandingPages/LandingPages';
import Preloader from './components/LandingPages/Preloader/Preloader';
import { Suspense } from 'react/cjs/react.production.min';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/DashBoard/Home/Home';
import Register from './components/LandingPages/Register/Register';
import Signup from './components/LandingPages/Register/Signup/Signup';
import Login from './components/LandingPages/Register/Login/Login';

const About = React.lazy(() => import('./components/LandingPages/About/About'));
const CamAmb = React.lazy(() =>
  import('./components/LandingPages/Camp_Amb/CamAmb')
);
const Events = React.lazy(() =>
  import('./components/LandingPages/Events/Events')
);
const Team = React.lazy(() => import('./components/LandingPages/Team/Team'));
const Sponsors = React.lazy(() =>
  import('./components/LandingPages/Sponsors/Sponsors')
);
const Gallery = React.lazy(() =>
  import('./components/LandingPages/Gallery/Gallery')
);
const Guests = React.lazy(() =>
  import('./components/LandingPages/Guests/Guests')
);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPages />}>
            <Route
              path=""
              element={
                <Suspense fallback={<Preloader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<Preloader />}>
                  <Register />
                </Suspense>
              }
            >
              <Route exact path='signup' element={<Signup />}/>
              <Route exact path='login' element={<Login />}/>
            </Route>
            <Route
              path="about"
              element={
                <Suspense fallback={<Preloader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<Preloader />}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="team"
              element={
                <Suspense fallback={<Preloader />}>
                  <Team />
                </Suspense>
              }
            />
            <Route
              path="guests"
              element={
                <Suspense fallback={<Preloader />}>
                  <Guests />
                </Suspense>
              }
            />
            <Route
              path="sponsors"
              element={
                <Suspense fallback={<Preloader />}>
                  <Sponsors />
                </Suspense>
              }
            />
            <Route
              path="ca"
              element={
                <Suspense fallback={<Preloader />}>
                  <CamAmb />
                </Suspense>
              }
            />
            <Route
              path="gallery"
              element={
                <Suspense fallback={<Preloader />}>
                  <Gallery />
                </Suspense>
              }
            />
          </Route>
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
