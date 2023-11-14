import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Picofweek from './components/Picofweek';
import Comments from './components/Comments';



const App = () => {
  return (
    <>
    <Appbar/>
    <Banner/>
    <Menu/>
    <Picofweek/>
    <Comments/>
    <div className="text-center my-3 text-primary small">
      Copyright 2023
    </div>
   
   </>
   
  )
}

export default App