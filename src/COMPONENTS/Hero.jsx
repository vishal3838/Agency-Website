import React from 'react'
import consulting from '../assets/logo/consulting-jobs.png'

export const Hero = () => {
  return (
    <>
     <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1> */}
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <img src={consulting} alt="" />
    </div>
  </main>
    </>
  )
}
