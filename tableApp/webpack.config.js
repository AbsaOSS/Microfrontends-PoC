const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "table",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "table",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        TableModule: "./src/app/modules/table/table.module.ts",
        DemoTableComponent:
          "./src/app/modules/table/components/demo-table/demo-table.component.ts",
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
        "@angular/material": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
          //includeSecondaries: true,
        },
      },
    }),
  ],
};
