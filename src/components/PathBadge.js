import * as React from 'react'

const directoryToPathId = (absPath) => {
  if (!absPath) return null
  const lower = absPath.toLowerCase()
  if (lower.includes('/blogs/backend/')) return 'backend-architect'
  if (lower.includes('/blogs/quantum/')) return 'quantum-computing'
  if (lower.includes('/blogs/frontend/')) return 'frontend-learning'
  if (lower.includes('/blogs/economy/')) return 'economy-learning'
  return null
}

const PathBadge = ({ pathId, fileAbsolutePath }) => {
  const resolved = pathId || directoryToPathId(fileAbsolutePath)
  if (!resolved) return null
  const labelMap = {
    'backend-architect': 'Backend Architect',
    'quantum-computing': 'Quantum Computing',
    'frontend-learning': 'Frontend',
    'economy-learning': 'Economy'
  }
  const label = labelMap[resolved] || resolved
  return (
    <a href={`/mygoals#${resolved}`} className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100">
      {label}
    </a>
  )
}

export default PathBadge


