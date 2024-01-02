/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import AboutUs from './Components/AboutUs'
import Product from './Components/Product'
import Review from './Components/Review'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        
        <div id='home'>
          <Home/>
        </div>

        <div id='menu'>
          <Menu/>
        </div>

        <div id='aboutus'>
          <AboutUs/>
        </div>

        <div id='products'>
          <Product/>
        </div>

        <div id='reviews'>
          <Review/>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default App