const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {
          eager: true,
          singleton: true,
          //strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          eager: true,
          singleton: true,
          //strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          eager: true,
          singleton: true,
          //strictVersion: true,
          requiredVersion: "auto",
        },
        "@auth0/auth0-angular": {
          eager: true,
          //singleton: true,
          //strictVersion: true,
          requiredVersion: "auto",
        },
      },
    }),
  ],
};
