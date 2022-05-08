import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from 'next-themes'

const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    if(theme === 'light') {
        setDarkMode(false);
    } 
    if(theme === 'dark') {
        setDarkMode(true);
    }
  }
  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={darkMode}
        onChange={toggleDarkMode}
        size={40}
      />
    </>
  )
}

export default Toggle
