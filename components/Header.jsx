import React, {  useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
import { Navbar } from '../components/navbar'

function Header() {
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
          <Navbar />
      </div>
    </div>
  )
}

export default Header
