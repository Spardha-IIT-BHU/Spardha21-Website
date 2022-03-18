import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './components/LandingPages/LandingPages';
import Preloader from './components/LandingPages/Preloader/Preloader';
import { Suspense } from 'react/cjs/react.production.min';
import DashBoard from './components/DashBoard/MainMenu/DashBoard';
// import Home from './components/DashBoard/Home/Home';

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
const Home = React.lazy(() => import('./components/DashBoard/Home/Home'));
const Registration = React.lazy(() =>
  import('./components/DashBoard/Registration/Registration')
);
const Profile = React.lazy(() =>
  import('./components/DashBoard/Profile/Profile')
);
const ContingentEdit = React.lazy(() =>
  import('./components/DashBoard/Registration/ContingentEdit/ContingentEdit')
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

          <Route path="/dashboard" element={<DashBoard />}>
            <Route
              path="home"
              element={
                <Suspense fallback={<Preloader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path=""
              element={
                <Suspense fallback={<Preloader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="registration"
              element={
                <Suspense fallback={<Preloader />}>
                  <Registration />
                </Suspense>
              }
            />
            <Route
              path="contingentEdit"
              element={
                <Suspense fallback={<Preloader />}>
                  <ContingentEdit />
                </Suspense>
              }
            />
            <Route
              path="Profile"
              element={
                <Suspense fallback={<Preloader />}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
