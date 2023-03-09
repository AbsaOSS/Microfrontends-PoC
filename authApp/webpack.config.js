const webpack = require("webpack");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "register",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "register",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        RegisterPageModule:
          "./src/app/modules/register/register-page.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion: "auto" },
        "@angular/common": { singleton: true, requiredVersion: "auto" },
        "@angular/router": { singleton: true, requiredVersion: "auto" },
        "@auth0/auth0-angular": {
          singleton: true,
          requiredVersion: "auto",
        },
      },
    }),
  ],
};
