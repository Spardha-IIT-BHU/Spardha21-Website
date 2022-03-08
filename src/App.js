import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import { Suspense } from 'react/cjs/react.production.min';

const About = React.lazy(() => import('./components/About/About'));
const Events = React.lazy(() => import('./components/Events/Events'));
const Team = React.lazy(() => import('./components/Team/Team'));
const Sponsors = React.lazy(() => import('./components/Sponsors/Sponsors'));
const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
        </>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Preloader/>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Preloader/>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={<Preloader/>}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="/team"
            element={
              <Suspense fallback={<Preloader/>}>
                <Team />
              </Suspense>
            }
          />
          <Route
            path="/sponsors"
            element={
              <Suspense fallback={<Preloader/>}>
                <Sponsors />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Preloader/>}>
                <Gallery />
              </Suspense>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
