'use client'

import { ErrorBoundary } from 'react-error-boundary'
import Dashboard from '../components/Dashboard'

function ErrorFallback({error}: {error: Error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Dashboard />
      </ErrorBoundary>
    </main>
  )
}
