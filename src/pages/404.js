import * as React from "react"
import { Link } from "gatsby"
import HeaderNav from '../components/headerNav'
import Footer from '../components/footer'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeaderNav />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sorry 😔, we couldn't find what you were looking for. 
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 9a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link 
              to="/" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🏠 Go Home
            </Link>
            <Link 
              to="/blogs" 
              className="inline-block bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📝 Browse Blog
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">You might be looking for:</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link 
                to="/mygoals" 
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                🎯 My Goals
              </Link>
              <Link 
                to="/blogs" 
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                📚 Blog Posts
              </Link>
            </div>
          </div>

          {/* Development Info */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Development Mode:</strong> Try creating a page in <code className="bg-yellow-100 px-2 py-1 rounded">src/pages/</code>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Page Not Found - Jocelyn's Life</title>
