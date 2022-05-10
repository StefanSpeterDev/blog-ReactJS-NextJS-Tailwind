import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../../services'
import Toggle from '../Toggle'

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
    <nav className="relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* Menu logo */}
          <Link href="/">
            <span className="cursor-pointer text-4xl transition duration-300 font-bold text-lightDark hover:text-gray-500 dark:text-lightGrey dark:hover:text-blue">
              StefanSpeterDev
            </span>
          </Link>
        </div>
        {/* Menu items */}
        <div className="hidden space-x-6 md:flex">
          <Toggle />
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="ease mt-2 ml-4 cursor-pointer align-middle font-semibold text-lightDark transition duration-300 hover:text-lightBlue dark:text-lightGrey dark:hover:text-blue">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <button
          id="menu-btn"
          className={`hamburger focus:outline:none block md:hidden ${
            navbar ? 'open' : ''
          }`}
          onClick={handleToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile menu */}

      <div className="flex justify-end md:hidden">
        <div
          id="menu"
          className={`z-10 mt-10 flex-col items-center space-y-6 bg-gray-400 py-8 font-bold drop-shadow-md sm:w-2/6 sm:self-center 
          ${navbar ? 'flex' : 'hidden'}`}
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
      <div className="border-darkBlue inline-block w-full border-b pb-8 dark:border-white"></div>
    </nav>
  )
}

export default Navbar
