import { createHashRouter } from 'react-router';
import App from './App';

export const basename = import.meta.env.DEV ? '' : 'mvbf-website';
export const routing = createHashRouter(
  [
    {
      Component: App,
      children: [
        {
          index: true,
          lazy: async () => {
            const { Projects } = await import('./pages/Projects');

            return { Component: Projects };
          },
        },
        {
          path: 'about',
          lazy: async () => {
            const { About } = await import('./pages/About');

            return { Component: About };
          },
        },
        {
          path: 'contact',
          lazy: async () => {
            const { Contact } = await import('./pages/Contact');

            return { Component: Contact };
          },
        },
        {
          index: true,
          lazy: async () => {
            const { Projects } = await import('./pages/Projects');

            return { Component: Projects };
          },
        },
        {
          path: '*',
          Component: () => <div style={{ marginTop: '1em' }}>Upcoming...</div>,
        },
      ],
    },
  ],
  { basename },
);
