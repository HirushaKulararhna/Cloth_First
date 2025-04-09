import React from 'react'
import {assets} from '../assets/assets.js'


const Hero = () => {
  return (
    <section className="container px-4 py-6 mx-auto">
      <div className="flex flex-col border border-gray-200 md:flex-row">
        <div className="flex flex-col justify-center w-full p-8 md:w-1/2 md:p-12 lg:p-16">
          <p className="mb-2 text-sm tracking-wider uppercase">
            OUR BESTSELLERS
          </p>
          <h1 className="mb-6 text-4xl font-medium text-gray-800 md:text-5xl">
            Latest Arrivals
          </h1>
          <button className="self-start px-6 py-3 text-xs tracking-wider text-white uppercase transition-colors bg-black hover:bg-gray-800">
            Shop Now
          </button>
        </div>
        <div className="w-full bg-pink-100 md:w-1/2">
          <img
            src={assets.hero_img}
            alt="Fashion model with black scarf"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
