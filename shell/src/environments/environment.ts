// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  microfrontends: {
    chartsApp: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: ['ChartsModule'],
    },
    tableApp: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: ['TableModule'],
    },
    authApp: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: ['RegisterPageModule'],
    },
    dashboardApp: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: ['DashboardModule'],
    },
    layout: {
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    },
  },
};
