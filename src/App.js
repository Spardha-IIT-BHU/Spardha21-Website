import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './components/LandingPages/LandingPages';
import Preloader from './components/LandingPages/Preloader/Preloader';
import { Suspense } from 'react/cjs/react.production.min';

const About = React.lazy(() => import('./components/LandingPages/About/About'));
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
              path="gallery"
              element={
                <Suspense fallback={<Preloader />}>
                  <Gallery />
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
