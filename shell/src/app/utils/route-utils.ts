import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Microfrontend } from '../core/types/microfrontend.types';

export function buildRoutes(options: Microfrontend[]): Routes {
  return options.map((o) => {
    const res = {
      path: o.routePath,
      title: o.displayName,
      loadChildren: () => {
        return loadRemoteModule(o)
          .then((m) => {
            return m[o.ngModuleName];
          })
          .catch((error) => {
            console.error('error loading: ' + error);
            return import(
              '../core/components/unavailable/unavailable.module'
            ).then((m) => m.UnavailableModule);
          });
      },
      canActivate: o.canActivate,
      //pathMatch: 'full',
    };
    return res;
  });
}
