import React, { Fragment } from 'react';
import '../assets/style/main.scss';
import Page1 from './Page/Page1';
import Page3 from './Page/Page3';
import Header from './Header';
// import Name from './Name'


function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <Page1 />
      <Page3 />


    </Fragment>
  );
}

export default App;