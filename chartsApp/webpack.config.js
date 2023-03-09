const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4204/",
    uniqueName: "charts",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "charts",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        ChartsModule: "./src/app/modules/charts/charts.module.ts",
      },
      shared: {
        "@angular/core": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
          //eager: true,
        },
        "@angular/common": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
          //eager: true,
        },
        "@angular/router": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
          //eager: true,
        },
        "ngx-echarts": {
          singleton: true,
          requiredVersion: "auto",
          //strictVersion: true,
          //eager: true,
        },
      },
    }),
  ],
};
