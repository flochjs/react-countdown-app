import React, { useEffect, useState } from 'react';

import classes from './style.module.css';

const getElapsedTimeSinceEpoch = () => {
  const currentDate = new Date();

  const totalSecondsSinceEpoch = Math.floor(currentDate / 1000);

  return {
    days: Math.floor(totalSecondsSinceEpoch / 3600 / 24),
    hours: Math.floor(totalSecondsSinceEpoch / 3600) % 24,
    minutes: Math.floor(totalSecondsSinceEpoch / 60) % 60,
    seconds: Math.floor(totalSecondsSinceEpoch) % 60,
  };
};

const TimeUnit = ({ value, label, ...aria }) => (
  <section className={classes.timeUnit} {...aria}>
    <strong>{value}</strong>
    <small className={classes.label}>{label}</small>
  </section>
);

const Countdown = () => {
  const [{ days, hours, minutes, seconds }, setTimeSince] = useState(
    getElapsedTimeSinceEpoch(),
  );

  useEffect(() => {
    const timer = setInterval(
      () => setTimeSince(getElapsedTimeSinceEpoch),
      1000,
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={classes.root}
      role="timer"
      aria-roledescription="Time elapsed since epoch"
      aria-live="polite"
    >
      <TimeUnit value={days} label="Days" aria-label="Days" />
      <TimeUnit value={hours} label="Hours" aria-label="Hours" />
      <TimeUnit value={minutes} label="Minutes" aria-label="Minutes" />
      <TimeUnit value={seconds} label="Seconds" aria-label="Seconds" />
    </div>
  );
};

export default Countdown;
