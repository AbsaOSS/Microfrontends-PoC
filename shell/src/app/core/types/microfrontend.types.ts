export type Microfrontend = {
  type: 'module';
  remoteEntry: string;
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
  canActivate?: any[];
};
