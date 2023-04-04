import React from 'react';
import Body from './components/Body';

const App = () => {
  return (
    <div className='cal m-0 h-full  sm:p-2'>
      <h1 className='text font-bold text-4xl -mb-2 text-center md:text-5xl'>Calculator App</h1>
      <Body />
    </div>
  )
}

export default App
