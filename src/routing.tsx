import { createBrowserRouter } from 'react-router';
import App from './App';

const newLocal = async () => {
  const { Projects } = await import('./pages/Projects');

  return { Component: Projects };
};
export const routing = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        {
          path: 'about',
          lazy: async () => {
            const { About } = await import('./pages/About');

            return { Component: About };
          },
        },
        {
          index: true,
          lazy: newLocal,
        },
        {
          path: '*',
          Component: () => <div style={{ marginTop: '1em' }}>Upcoming...</div>,
        },
      ],
    },
  ],
  { basename: 'mvbf-website' },
);
