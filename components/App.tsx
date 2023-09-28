'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
})

export function App({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={className}>
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  )
}
