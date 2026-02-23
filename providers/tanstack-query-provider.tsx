"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "./get-query-client"
import { Toaster } from "sonner"
import { CookiesProvider } from "react-cookie"

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <CookiesProvider>
                <Toaster />
          {children}
        </CookiesProvider>
        </QueryClientProvider>
    )
}