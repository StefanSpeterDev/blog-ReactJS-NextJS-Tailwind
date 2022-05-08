import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
import { Navbar } from '../components/navbar'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}

export default Header
