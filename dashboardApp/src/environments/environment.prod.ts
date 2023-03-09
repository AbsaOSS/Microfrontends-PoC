export const environment = {
  production: false,

  microfrontends: {
    tableApp: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: ['TableModule', 'DemoTableComponent'],
    },
  },
};
