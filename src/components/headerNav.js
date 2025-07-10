import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">J</span>
                        </div>
                        <span className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                            Jocelyn's Life
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    <Link 
                        to="/" 
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-50"
                        activeClassName="text-blue-600 bg-blue-50"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/blogs" 
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-50"
                        activeClassName="text-blue-600 bg-blue-50"
                    >
                        Blog
                    </Link>
                    <Link 
                        to="/mygoals" 
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-50"
                        activeClassName="text-blue-600 bg-blue-50"
                    >
                        Goals
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/blogs"
                            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/mygoals"
                            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Goals
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default HeaderNav