import React from 'react';

import Countdown from '../Countdown';

import classes from './style.module.css';

function App() {
  return (
    <main className={classes.root}>
      <h1 className={classes.title}>Elapsed Time since Epoch</h1>
      <Countdown />
      <p className={classes.note}>
        Computers are tired of counting time..They will let us know..
      </p>
    </main>
  );
}

export default App;
