import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <MantineProvider withCssVariables withGlobalClasses withStaticClasses>
        <Notifications /> 
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)
