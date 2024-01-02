/* eslint-disable no-unused-vars */
import React from 'react'
import Menucard from '../Layouts/Menucard'
import img1 from './../assets/img/menu1.jpg'
import img2 from './../assets/img/menu2.jpg'
import img3 from './../assets/img/menu3.jpg'
import img4 from './../assets/img/menu4.jpg'
import img5 from './../assets/img/menu5.jpg'
import img6 from './../assets/img/menu6.jpg'

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <Menucard img={img1} title="Espresso" />
        <Menucard img={img2} title="Cappuccino" />
        <Menucard img={img3} title="Latte" />
        <Menucard img={img4} title="Americano" />
        <Menucard img={img5} title="Macchiato" />
        <Menucard img={img6} title="Doppio" />
      </div>
    </div>
  )
}

export default Menu
