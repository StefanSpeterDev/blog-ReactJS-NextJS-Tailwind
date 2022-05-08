import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../../services'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [navbar, setNavbar] = useState(false)

  // fetch categories on page load
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  const handleToggle = () => {
    setNavbar((prev) => !prev)
  }

  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* Menu logo */}
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              StefanSpeterDev
            </span>
          </Link>
        </div>
        {/* Menu items */}
        <div className="hidden space-x-6 md:flex">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="ease mt-2 ml-4 cursor-pointer align-middle font-semibold text-white transition duration-300 hover:text-gray-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <button
          id="menu-btn"
          class={`hamburger focus:outline:none block md:hidden ${navbar ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile menu */}

      <div class="md:hidden">
        <div
          id="menu"
          class={`absolute left-6 right-6 mt-10 z-10 flex-col items-center space-y-6 self-end bg-gray-200 py-8 font-bold drop-shadow-md sm:w-auto sm:self-center 
          ${ navbar ? 'flex' : 'hidden'}`}
        >
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
