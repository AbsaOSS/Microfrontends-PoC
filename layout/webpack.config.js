const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4205/",
    uniqueName: "layout",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        LayoutModule: "./src/app/modules/layout/layout.module.ts",
        Header: "./src/app/modules/layout/header/header.component.ts",
        Footer: "./src/app/modules/layout/footer/footer.component.ts",
      },
      shared: {
        "@angular/core": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
        },
        "@angular/common": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
        },
        "@angular/router": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
        },
        "@auth0/auth0-angular": {
          singleton: true,
          requiredVersion: "auto",
        },
      },
    }),
  ],
};
