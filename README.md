## This is a demo project (PoC) of microfrontends based on Webpack 5 Module Federation.

#### This repository consists of 6 projects. Since this demo follows a distributed repositories approach, each project can be stored in a separate repository.

- shell - container application (listening on http://localhost:4200/), which loads remote modules inside:
  - authApp - http://localhost:4201/
  - tableApp - http://localhost:4202/
  - dashboardApp - http://localhost:4203/ (nested - consumes tableApp)
  - chartsApp - http://localhost:4204/
  - layout - http://localhost:4205/

#### Each remote can run in a standalone mode (except authApp and layout, which just exposes separate components). "extraWebpackConfig" should be removed from angular.json in this case.

Remotes have multiple entry points:

- AppModule - for running in a standalone mode (bootstraps the application, can't be exposed from remote)
- Any other module or component can be exposed, and they serve as entry points for the shell

#### To run the shell app, execute npm install and ng serve for each project.

The server will be listening on http://localhost:4200/

This demo uses SSO authentication based on Auth0 platform. AuthService is shared as a singletone among the apps.

##### login: user@login.com

##### pwd: qwerty123!
