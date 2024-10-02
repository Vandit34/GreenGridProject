import React, { useState } from 'react'
import {
  Bars3Icon,
  DocumentTextIcon,
  ChartBarIcon,
  UsersIcon
} from '@heroicons/react/24/outline' // Import Bars3Icon from Heroicons
import landingBgImg from '../assets/LandingBgImg.webp' // Replace with the actual path to landingBgImg
import GreenGridLogo from '../assets/GreenGridLogo.png' // Replace with the actual path to GreenGridLogo
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Posts', href: '#' }
]

const features = [
  {
    name: 'Post Creation',
    description:
      'Easily create posts to share updates, insights, and questions with the community, fostering engagement and collaboration among farmers.',
    icon: DocumentTextIcon // Adjust the icon as needed
  },
  {
    name: 'Market Insights',
    description:
      'Access valuable market insights and trends to make informed decisions about your crops and sales strategies, enhancing profitability.',
    icon: ChartBarIcon // Adjust the icon as needed
  },
  {
    name: 'Connecting with Other Farmers',
    description:
      'Join a vibrant community of farmers to exchange knowledge, share experiences, and build valuable connections for mutual growth.',
    icon: UsersIcon // Adjust the icon as needed
  }
]

export default function Landing () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), url(${landingBgImg})`
        }}
        className='bg-cover bg-center'
      >
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav
            aria-label='Global'
            className='flex items-center justify-between p-6 lg:px-8'
          >
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>GreenGrid</span>
                <img alt='' src={GreenGridLogo} className='h-16 w-auto' />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(true)}
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon aria-hidden='true' className='h-6 w-6' />
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-sm font-semibold leading-6 text-white'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-white'
              >
                Log in <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='text-balance text-2xl font-bold tracking-tight text-white sm:text-5xl'>
                GreenGrid : Where Farmers Connect, Share, and Grow
              </h1>
              <p className='mt-6 text-lg leading-8 text-white'>
                Welcome to GreenGrid, the social media platform for farmers to
                connect, share insights, and collaborate to thrive in the
                digital agricultural landscape.
              </p>

              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>

            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
                className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              />
            </div>
          </div>
        </div>
      </div>
      {/* // XXXXXXXXXX Feature Section XXXXXXXXX
    // ------------- */}
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Empowering Farmers, Connecting Communities
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              GreenGrid is your all-in-one platform to create posts, gain market
              insights, and connect with fellow farmers. Join us in cultivating
              a thriving agricultural community with knowledge sharing and
              support at your fingertips.
            </p>
          </div>

          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map(feature => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                      <feature.icon
                        aria-hidden='true'
                        className='h-6 w-6 text-white'
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* // ------------- */}
    </>
  )
}
