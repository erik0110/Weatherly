import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Current from './Current';
import Hourly from './Hourly';
import TenDay from './TenDay';


export default function App() {
  return(
    <div className="App">
      <Welcome />
      <Search />
      <Current />
      <Hourly />
      <TenDay />
    </div>
  )
}
