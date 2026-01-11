import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') return;
  const { worker } = await import('./mocks/browser');

  return worker.start({
    onUnhandledRequest: 'warn',
  });
}

const queryClient = new QueryClient();
enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>,
  );
});
