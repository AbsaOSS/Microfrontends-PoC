const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4203/",
    uniqueName: "dashboardApp",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboardApp",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        DashboardModule: "./src/app/modules/dashboard/dashboard.module.ts",
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
      },
    }),
  ],
};
