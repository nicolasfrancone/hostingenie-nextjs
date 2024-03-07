import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Banner from '@/components/banner'

export default function Header() {
  return (
    <>
    
    <header className="absolute w-full z-30">
    <Banner /> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop nav links */}
            <ul className="flex-grow flex justify-center items-center">
              <li>
                <a href="/#features" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Features
                </a>
              </li>
              <li>
                <a href="/#demos" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Demos
                </a>
              </li>
              <li>
                <a href="/#benefits" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Benefits
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#about" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
    
    </>
  )
}
