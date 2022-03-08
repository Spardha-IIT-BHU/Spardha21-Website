import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

const Events = () => {
  const [checkevents, setCheckevents] = useState(true);

  useEffect(() => {
    // console.log("Sponsors");
    setTimeout(() => {
      setCheckevents(false);
    }, 2000);
  }, []);

  return (
    <>
      {checkevents ? (
        <Preloader />
      ) : (
        <div>
          <h1>Event</h1>
        </div>
      )}
    </>
  );
};

export default Events;
