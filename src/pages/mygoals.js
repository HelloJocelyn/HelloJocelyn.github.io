import * as React from 'react'
import { Link } from 'gatsby'
import Content from '../components/content'
import Seo from "../components/seo"
import Footer from '../components/footer'

const MyGoals = () => {
    const goals = [
        { id: 1, title: "Buy my own house", category: "Life", status: "in-progress", priority: "high" },
        { id: 2, title: "Buy my own car", category: "Life", status: "not-started", priority: "medium" },
        { id: 3, title: "Learn piano well", category: "Music", status: "in-progress", priority: "high" },
        { id: 4, title: "Participate in a music band", category: "Music", status: "not-started", priority: "medium" },
        { id: 5, title: "Learn quantum computing", category: "Technology", status: "in-progress", priority: "high" },
        { id: 6, title: "Learn robotics", category: "Technology", status: "not-started", priority: "medium" },
        { id: 7, title: "Learn finance", category: "Finance", status: "not-started", priority: "high" },
        { id: 8, title: "Invest in stock market", category: "Finance", status: "not-started", priority: "medium" }
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-500'
            case 'in-progress': return 'bg-blue-500'
            case 'not-started': return 'bg-gray-300'
            default: return 'bg-gray-300'
        }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800'
            case 'medium': return 'bg-yellow-100 text-yellow-800'
            case 'low': return 'bg-green-100 text-green-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Life': return '🏠'
            case 'Music': return '🎵'
            case 'Technology': return '💻'
            case 'Finance': return '💰'
            default: return '🎯'
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        My Todos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The milestones I'm working towards in my journey of life
                    </p>
                </div>

                {/* Goals Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {goals.map((goal) => (
                            <div key={goal.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{getCategoryIcon(goal.category)}</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-lg">{goal.title}</h3>
                                            <span className="text-sm text-gray-500">{goal.category}</span>
                                        </div>
                                    </div>
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(goal.status)}`}></div>
                                </div>

                                {/* Priority Badge */}
                                <div className="mb-4">
                                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(goal.priority)}`}>
                                        {goal.priority} priority
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 capitalize">
                                        Status: {goal.status.replace('-', ' ')}
                                    </span>
                                    <div className="flex space-x-1">
                                        {goal.status === 'completed' && (
                                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {goal.status === 'in-progress' && (
                                            <svg className="w-4 h-4 text-blue-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Summary */}
                    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Progress Overview</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {goals.filter(g => g.status === 'completed').length}
                                </div>
                                <div className="text-gray-600">Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    {goals.filter(g => g.status === 'in-progress').length}
                                </div>
                                <div className="text-gray-600">In Progress</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-600 mb-2">
                                    {goals.filter(g => g.status === 'not-started').length}
                                </div>
                                <div className="text-gray-600">Not Started</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">
                                    {goals.length}
                                </div>
                                <div className="text-gray-600">Total Goals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const Head = () => <Seo title="My Goals" />

export default MyGoals