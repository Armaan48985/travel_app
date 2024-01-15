import { FEATURES } from '@/constants'
import Image from 'next/image'
import { describe } from 'node:test'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative flex justify-end w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            width={440}
            height={1000}
            alt='phone'
            className='feature-phone'
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt=''
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {[FEATURES.map((feature) => (
              <FeatureItem 
                title={feature.title}
                key={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))]}
          </ul>
        </div>
      </div>
    </section> 
  )
}

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem = ({title, description, icon} : FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image
          src={icon}
          alt={title}
          width={28}
          height={28}
        />
      </div>

      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className="mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none regular-16">{description}</p>
    </li>
  )
}

export default Features