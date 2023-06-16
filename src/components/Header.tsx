import { useState } from 'react'
import { Link } from 'wouter'
import { IconMoon, IconSun } from "../components/Icons"

function Header() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    const html = document.querySelector('html')
    setDarkMode(!darkMode)

    if (!html) return

    if (!darkMode) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
  }

  return (
    <div className="py-7 px-10 sm:px-12 lg:px-20 
    bg-white shadow-header dark:bg-c-dark-blue-elements text-c-very-dark-blue-text dark:text-c-very-light-gray-bg "
    >
      <div className="container flex justify-between">
        <Link href='/'> <h1 className="font-bold">Where in the world?</h1> </Link>
        <button onClick={toggleDarkMode} className="flex  items-center gap-4">
          {
            darkMode
              ? <IconSun className='fill-c-very-dark-blue-text -rotate-[30deg]' />
              : <IconMoon className='fill-c-very-light-gray-bg' />
          }

          {
            darkMode
              ? <span>Light Mode</span>
              : <span>Dark Mode</span>
          }
        </button>
      </div>
    </div>
  )
}

export default Header