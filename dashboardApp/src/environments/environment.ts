// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  microfrontends: {
    tableApp: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: ['TableModule', 'DemoTableComponent'],
    },
  },
};
