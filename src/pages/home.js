import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";
import Content from "../components/content";
import Footer from "../components/footer";

const Home = ()=>{
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="mb-8">
                        <div className="relative inline-block">
                            <StaticImage
                                alt="Jocelyn's profile"
                                src="../images/avatar0.jpeg"
                                className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl border-4 border-white"
                                imgStyle={{ borderRadius: '50%' }}
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Hello, I'm Jocelyn
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        A passionate lifelong learner exploring the world of technology, science, and knowledge
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            🚀 Technology
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            📚 Learning
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            🔬 Science
                        </span>
                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            💡 Innovation
                        </span>
                    </div>
                </div>

                {/* About Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            About Me
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    I'm a curious mind who believes in the power of continuous learning. 
                                    From software development to quantum physics, from network engineering 
                                    to artificial intelligence, I'm always exploring new frontiers of knowledge.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    This website is my digital garden where I share insights, document my learning journey, 
                                    and connect with fellow knowledge seekers.
                                </p>
                            </div>
                            {/* <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700">Full-stack Development</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-700">System Architecture</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Network Engineering</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Quantum Computing</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Explore My World
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="/blogs" className="group">
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📝</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            Blog Posts
                                        </h3>
                                        <p className="text-gray-600">Discover my thoughts on technology, science, and life</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                        <a href="/mygoals" className="group">
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                                            My Todos
                                        </h3>
                                        <p className="text-gray-600">See what I'm working towards and learning</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const Head = () => <Seo title="Home Page" />

export default Home
