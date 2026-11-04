import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import css from '../styles.css?url';
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
 head: () => ({ meta: [
  { charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'LAM | Loving All of Me — African Wellness Reimagined' },
  { name: 'description', content: 'Explore African-inspired gelato, wellness rituals, intimate gatherings and thoughtful hospitality from Loving All of Me in Lagos.' },
  { property: 'og:title', content: 'LAM — Loving All of Me' },
  { property: 'og:description', content: 'Come home to yourself. African-inspired nourishment, beautiful rituals and unforgettable experiences.' },
  { property: 'og:type', content: 'website' }
 ], links: [{ rel: 'stylesheet', href: css }] }),
 shellComponent: ({children}: {children: ReactNode}) => <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>,
 component: () => <QueryClientProvider client={Route.useRouteContext().queryClient}><Outlet /></QueryClientProvider>,
 notFoundComponent: () => <div style={{padding:80,textAlign:'center'}}><h1>Page not found</h1><a href="/">Return to LAM</a></div>
});