import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt='camp'
          height={50}
          width={50}
        />

        <p className='regular-18 -mt-1 mb-3 text-green50 uppercase'>We are here for you</p>
      
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you to easy path</h2>
          <p className='text-gray-30 regular-16 xl:max-w-[520px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam officia odit voluptatibus necessitatibus rem provident molestiae voluptatum, corporis doloremque aliquid. Itaque nulla accusamus nam, ipsam tenetur voluptate dolorem consequatur id distinctio a dolor magni molestiae quaerat alias minus cum quo! Id dolore magni aliquid.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt='boat'
          height={1440}
          width={580}
          className='w-full object-cover object-center lg:rounded-5xl'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image
            src="/meter.svg"
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Agaus Calientas</p>
            </div>

            <div className="flex w-full flex-col">
             
                <p className='regular-16 text-gray-20'>Start Track</p>
                <h4 className='bold-20 mt-2 whitespace-nowrap'>Wanarajo Pasurana</h4>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Guide