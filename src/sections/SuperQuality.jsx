import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about_us' className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <br />
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>Shoes
        </h2>
        <p
          className="mt-4 lg:max-w-lg info-text"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam beatae porro, velit culpa excepturi adipisci iste quia, ipsa laudantium nobis magni maiores. Modi explicabo velit repellendus quisquam reprehenderit aut.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedeication to detail and excellence your satisfaction</p>
        <div className="mt-11">
        <Button label="View Details"  />

        </div>
      </div>

      <div className="flex-1 justify-center items-center">
        <img src={shoe8} alt="" width={570} height={522} className="object-contain"/>
      </div>

    </section>
  )
}

export default SuperQuality